from flask import Flask, request, jsonify, Response
from flask_cors import CORS, cross_origin
from model import meoDTO
from model.meoDTO import Meo

#init app
app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://mongodb:27017/"

#app process
# @app.after_request
# def after_request(response):
#   response.headers.add('Access-Control-Allow-Origin', '*')
#   response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
#   response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
#   return response

@app.route('/')
def index():
    welcome = {'message': 'Meoww'}
    return jsonify(welcome).data, 200
    # return 'Meowww'

@app.route('/meo/<string:name>', methods = ['GET'])
def get_meo(name):
    meo = Meo.getMeo(name)
    message = {'message': 'Rat tiec, be meo khong co TvT'}
    if meo == {}:
        return jsonify(message).data, 404
    else:
        meo_dict = {
            'name': meo['name'],
            'price': meo['price'],
            'quantity': meo['quantity']
        }
        return jsonify(meo_dict).data, 200

@app.route('/meos', methods = ['GET'])
def get_meos():
    meos = Meo.getMeos()
    meo_list = []
    for meo in meos:
        meo_dict = {
            'name': meo['name'],
            'price': meo['price'],
            'quantity': meo['quantity']
        }
        meo_list.append(meo_dict)
    return jsonify(meo_list), 200

@app.route('/addmeos', methods = ['POST'])
def add_meo():
    data = request.get_json()
    meo_data = Meo(data['name'], data['price'], data['quantity'])
    Meo.addMeo(meo_data)
    message = {'message': 'Done'}
    return jsonify(message).data, 200

#run app
if __name__ == '__main__':
    app.run(host = "0.0.0.0", port = 5000, debug = True)