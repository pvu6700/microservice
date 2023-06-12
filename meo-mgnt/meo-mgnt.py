from flask import Flask, request, jsonify
from model import meoDTO
from model.meoDTO import Base, Meo, Engine, Session

#init app
app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///meo.sqlite3'

#init db
Base.metadata.create_all(Engine)

#app process

@app.route('/meos', methods = ['GET'])
def get_meo():
    session = Session()
    meo_obj = session.query(Meo).all()
    meo = meoDTO.meo_schema.dump(meo_obj)
    session.close()
    return jsonify(meo).data

@app.route('/meos', methods = ['POST'])
def add_meo():
    posted_meo = meoDTO.MeoSchema().load(request.get_json())
    meo_obj = Meo(**posted_meo, created_by = 'HTTP post request')
    session = Session()
    session.add(meo_obj)
    session.commit()
    new_meo = meoDTO.MeoSchema().dump(meo_obj)
    session.close()
    return jsonify(new_meo), 201

#run app
if __name__ == '__main__':
    app.run(host = "0.0.0.0", port = 5000, debug = True)