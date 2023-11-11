


class EventService(): 
    def handleEventRequest(self, queryParam):
        if (queryParam): 
            # Query DB to find event by ID
            # If ID is not found then return all events, 
            # with message at top saying event was not found
            pass
        else:
            # Return list of all events in proper JSON format
            pass
    
    def retrieveAllEvents(self):
        # returns all events 
        pass
    
    def checkEventStatus(self):
        # Returns boolean of whether or not event was found in Database
        # True if found, false if not found
        pass
            