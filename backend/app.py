from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)

from services import EventService, VolunteerEventService, BusinessEventService
from database import Database

eventService = EventService()
volunteerEventService = VolunteerEventService()
businessEventService = BusinessEventService()
database = Database()

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
    
class DBTest(Resource):
    def get(self):
        return database.makeConnection()

api.add_resource(Event, '/event')
api.add_resource(VolunteerEvent, '/event/volunteer')
api.add_resource(BusinessEvent, '/event/business')
api.add_resource(DBTest, '/db')

if __name__ == '__main__':
    app.run(debug=True) 
    
    