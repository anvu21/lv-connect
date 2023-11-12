import psycopg2
from config import DATABASE, USER, PASSWORD, HOST, PORT
from queries import CREATE_ALL_TABLES, INSERT_USER, TEST_USER
from queries import DROP_TABLES, INSERT_USER_V2, RETRIEVE_USERS,VIEW_ALL_TABLES,RETRIEVE_USERS_BY_ID
from models import User

class Database():
    # Only called initially
    
    def dropAllTables(self):
        try:
            engine = psycopg2.connect(
                    database=DATABASE,
                    user=USER,
                    password=PASSWORD,
                    host=HOST,
                    port=PORT
            )
            cursor = engine.cursor()
            drop_tables = DROP_TABLES
            cursor.execute(drop_tables)
            engine.commit()
        except Exception as e:
            return "Database setup failed due to {}".format(e) 
    
    def setup(self):
        try:
            engine = psycopg2.connect(
                    database=DATABASE,
                    user=USER,
                    password=PASSWORD,
                    host=HOST,
                    port=PORT
            )
            cursor = engine.cursor()
            create_all_tables = CREATE_ALL_TABLES
            cursor.execute(create_all_tables)
            engine.commit()
            print("TABLES CREATED")
        except Exception as e:
            return "Database setup failed due to {}".format(e) 
    
    def getAllTables(self):
        try:
            engine = psycopg2.connect(
                    database=DATABASE,
                    user=USER,
                    password=PASSWORD,
                    host=HOST,
                    port=PORT
            )
            cursor = engine.cursor()
            cursor.execute(VIEW_ALL_TABLES)
            table_columns = cursor.fetchall()
            engine.commit()
            
            tables_and_columns = {}
            for row in table_columns:
                table_name = row[0]
                column_name = row[1]
                data_type = row[2]

                if table_name not in tables_and_columns:
                    tables_and_columns[table_name] = []

                tables_and_columns[table_name].append((column_name, data_type))
            return tables_and_columns
        except Exception as e:
            return "Database setup failed due to {}".format(e)
         
    def addUser(self, user: User):
        try:
            engine = psycopg2.connect(
                    database=DATABASE,
                    user=USER,
                    password=PASSWORD,
                    host=HOST,
                    port=PORT
            )
            cursor = engine.cursor()
            
            user_strs = (
                user.id,
                user.dateSignUp,
                user.name,
                user.username,
                user.email,
                user.bio,
                user.business_id,
            )

            print(user_strs)
            cursor.execute(INSERT_USER_V2, user_strs)
            # cursor.execute(INSERT_USER_V2, user_strs)
            engine.commit()
        except Exception as e:
            return "Database setup failed due to {}".format(e) 
    
    def getUsers(self, id):
        try:
            engine = psycopg2.connect(
                    database=DATABASE,
                    user=USER,
                    password=PASSWORD,
                    host=HOST,
                    port=PORT
            )
            cursor = engine.cursor()
            
            if id is None:
                cursor.execute(RETRIEVE_USERS)
            else: 
                cursor.execute(RETRIEVE_USERS_BY_ID, id)
                
            rows = cursor.fetchall()
            columns = [desc[0] for desc in cursor.description]
            result_list = [dict(zip(columns, row)) for row in rows]
            engine.commit()
            return result_list
        except Exception as e:
            return "Database setup failed due to {}".format(e) 

        
        
    def makeConnection(self):
        #gets the credentials from .aws/credentials
        print("LOGGING MESSAGE: STARTING ATTEMPT TO CONNECT")
        try:
            # Establish a connection to the database
            engine = psycopg2.connect(
                    database=DATABASE,
                    user=USER,
                    password=PASSWORD,
                    host=HOST,
                    port=PORT
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
                    