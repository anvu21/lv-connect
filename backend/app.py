from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)

class Event(Resource):
    def get(self):
        eventId = request.args.get('id')
        eventId_val = (eventId is None)
        return jsonify({
            'queryparam': eventId_val,
            'param': eventId,
            'message': 'hello chooch'
            })
    
api.add_resource(Event, '/event')

if __name__ == '__main__':
    app.run(debug=True) 
    
    