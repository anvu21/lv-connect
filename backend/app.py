from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)

from services import EventService, VolunteerEventService, BusinessEventService

eventService = EventService()
volunteerEventService = VolunteerEventService()
businessEventService = BusinessEventService()

class Event(Resource):
    def get(self):
        id = request.args.get('id') # optional query param
        return eventService(id)
    
class VolunteerEvent(Resource):
    def get(self):
        id = request.args.get('id') # optional query param
        return volunteerEventService(id)
    
# Called business event, same meaning as business oppurtunity
class BusinessEvent(Resource):
    def get(self):
        id = request.args.get('id') # optional query param
        return businessEventService(id)

api.add_resource(Event, '/event')
api.add_resource(VolunteerEvent, '/event/volunteer')
api.add_resource(BusinessEvent, '/event/business')

if __name__ == '__main__':
    app.run(debug=True) 
    
    