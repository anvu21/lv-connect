from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)
CORS(app)

# test commit 

from services import EventService, VolunteerEventService, BusinessEventService, UserService
from database import Database

eventService = EventService()
volunteerEventService = VolunteerEventService()
businessEventService = BusinessEventService()
database = Database()
userService = UserService()

class Event(Resource):
    def get(self):
        id = request.args.get('id') # optional query param
        return jsonify(eventService(id))
    
class VolunteerEvent(Resource):
    def get(self):
        id = request.args.get('id') # optional query param
        return jsonify(volunteerEventService(id))
    
# Called business event, same meaning as business oppurtunity
class BusinessEvent(Resource):
    def get(self):
        id = request.args.get('id') # optional query param
        return jsonify(businessEventService(id))
    
class User(Resource):
    def post(self):
        try:
            request_data = request.get_json()
            result = userService.addUser(request_data)
            return result, 201
        except Exception as e:
            return {'error': str(e)}, 400
    def get(self):
        try: 
            return userService.getUsers()
        except Exception as e:
            return {'error': str(e)}, 400

class UserById(Resource):
    def get(self):
        try: 
            request_data = request.get_json()
            return userService.getUserById(request_data)
        except Exception as e:
            return {'error': str(e)}, 400
        
class DBSetup(Resource):
    def post(self):
        return database.setup()

class DBDestroy(Resource):
    def post(self):
        return database.dropAllTables()
    
class DBViewTables(Resource):
    def post(self):
        return database.getAllTables()

api.add_resource(Event, '/event')
api.add_resource(VolunteerEvent, '/event/volunteer')
api.add_resource(BusinessEvent, '/event/business')
api.add_resource(DBSetup, '/db/setup')
api.add_resource(DBDestroy, '/db/destroy')
api.add_resource(DBViewTables, '/db/tables')
api.add_resource(User, '/user')
api.add_resource(UserById, '/user/id')

if __name__ == '__main__':
    app.run(debug=True) 
    
    