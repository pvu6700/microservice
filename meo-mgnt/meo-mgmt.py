from flask import Flask, request, jsonify, Response
from flask_cors import CORS, cross_origin
from model import meoDTO
from model.meoDTO import Base, Meo, Engine, Session

#init app
app = Flask(__name__)
CORS(app, resources={r'*': {'origins': '*'}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///meo.sqlite3'

#init db
Base.metadata.create_all(Engine)

#app process
@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route('/')
def index():
    return {'messange': 'Meowww'}

@app.route('/meo/<int:id>', methods = ['GET'])
def get_meo(id):
    session = Session()
    meo_obj = session.query(Meo).filter_by(id=id).first()
    if meo_obj:
        meo = meoDTO.meo_schema.dump(meo_obj)
        session.close()
        return jsonify(meo).data
    return {'message': 'Rat tiec, be meo khong co TvT'}, 404

@app.route('/meos', methods = ['GET'])
def get_meos():
    session = Session()
    meo_obj = session.query(Meo).all()
    meo = meoDTO.meo_schema.dump(meo_obj)
    session.close()
    return jsonify(meo).data

@app.route('/addmeos', methods = ['POST'])
def add_meo():
    posted_meo = meoDTO.MeoSchema().load(request.get_json())
    meo_obj = Meo(**posted_meo)
    session = Session()
    session.add(meo_obj)
    session.commit()
    new_meo = meoDTO.MeoSchema().dump(meo_obj)
    session.close()
    return jsonify(new_meo).data, 201

#run app
if __name__ == '__main__':
    app.run(host = "0.0.0.0", port = 5000, debug = True)