# lv-connect - Backend


### Creating backend - Python Flask (MacOS)
```
python3 -m venv venv
source venv/bin/activate
```

### Routes
| Route     | Purpose |
| ----------- | ----------- |
| /event     | retrieves list of all events   |
| /event?id={eventId}     | retrieves event by id |
| /event/volunteer  | retrieves list of all volunteer events |
| /event/volunteer?id={eventId}     | retrieves volunteer event by id |
| /event/business | retrieves list of all business events |
| /event/business?id={eventId}      | retrieves business event by id |