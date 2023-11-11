from decouple import config

class Constants():
    # DATABASE=postgres
    # USER=lvconnmasteruser
    # PASSWORD=masterpassword12
    # HOST=lvconnect.c5up6f6hgqkx.us-east-1.rds.amazonaws.com
    # PORT=5432
    DATABASE = config("DATABASE")
    USER = config("USER")
    PASSWORD = config("PASSWORD")
    HOST = config("HOST")
    PORT = config("PORT")
