import psycopg2
from constants import Constants

class Database():
    def setup():
        constants = Constants()
        engine = psycopg2.connect(
                database=constants.DATABASE,
                user=constants.USER,
                password=constants.PASSWORD,
                host=constants.HOST,
                port=constants.PORT
        )
        cursor = engine.cursor()
        create_all_tables = '''
        -- event table
        CREATE TABLE event (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            description TEXT,
            location VARCHAR(255),
            pictures BYTEA,
            date TIMESTAMP,
            datePosted TIMESTAMP,
            type VARCHAR(10) CHECK (type IN ('EVENT', 'VOLUNTEER', 'BUSINESS')),
            comments INT
        );

        -- user table
        CREATE TABLE "user" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            username VARCHAR(255),
            email VARCHAR(255),
            bio TEXT,
            dateSignUp TIMESTAMP,
            businessId VARCHAR(255)
        );

        -- business table
        CREATE TABLE business (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            industry VARCHAR(255),
            address VARCHAR(255),
            phone VARCHAR(20),
            email VARCHAR(255),
            bio TEXT
        );

        -- chat table
        CREATE TABLE chat (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            description TEXT,
            messageCount INT,
            date TIMESTAMP
        );

        -- message table
        CREATE TABLE message (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES "user"(id),
            chat_id INT REFERENCES chat(id),
            contents TEXT,
            date TIMESTAMP
        );

        -- comment table 
        CREATE TABLE comment (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES "user"(id),
            event_id INT REFERENCES event(id),
            contents TEXT,
            date TIMESTAMP
        );
        '''
        
        
        
    def makeConnection(self):
        constants = Constants()
        #gets the credentials from .aws/credentials
        print("LOGGING MESSAGE: STARTING ATTEMPT TO CONNECT")
        try:
            # Establish a connection to the database
            engine = psycopg2.connect(
                database=constants.DATABASE,
                user=constants.USER,
                password=constants.PASSWORD,
                host=constants.HOST,
                port=constants.PORT
            )

            # Create a cursor object to interact with the database
            cursor = engine.cursor()

            # Define the CREATE TABLE query
            create_table_query = '''
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) NOT NULL,
                email VARCHAR(100) NOT NULL
            );
            '''

            # Execute the CREATE TABLE query
            cursor.execute(create_table_query)

            # Commit the changes to the database
            engine.commit()

            # Sample data for insertion
            sample_data = [
                ("user7", "user1@example.com"),
                ("user8", "user2@example.com"),
                ("user9", "user3@example.com")
            ]

            # Insert data into the table
            insert_query = "INSERT INTO users (username, email) VALUES (%s, %s);"
            cursor.executemany(insert_query, sample_data)

            # Commit the changes to the database
            engine.commit()

            # Sample query to retrieve all entries
            select_query = "SELECT * FROM users;"
            cursor.execute(select_query)
            all_entries = cursor.fetchall()
            print("All entries:")
            for entry in all_entries:
                print(entry)

            # Sample query to update an entry
            update_query = "UPDATE users SET email = %s WHERE username = %s;"
            update_data = ("newemail@example.com", "user1")
            cursor.execute(update_query, update_data)
            engine.commit()

            # Sample query to delete an entry
            delete_query = "DELETE FROM users WHERE username = %s;"
            delete_data = ("user2",)
            cursor.execute(delete_query, delete_data)
            engine.commit()

            # Close the cursor and connection
            cursor.close()
            engine.close()
            return all_entries
        except Exception as e:
            return "Database connection failed due to {}".format(e)                
                    