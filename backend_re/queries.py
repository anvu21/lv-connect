
CREATE_ALL_TABLES='''
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
        CREATE TABLE users (
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
            user_id INT REFERENCES users(id),
            chat_id INT REFERENCES chat(id),
            contents TEXT,
            date TIMESTAMP
        );

        -- comment table 
        CREATE TABLE comment (
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id),
            event_id INT REFERENCES event(id),
            contents TEXT,
            date TIMESTAMP
        );
        '''
        
DROP_TABLES= '''
-- Drop the comment table
DROP TABLE IF EXISTS comment;

-- Drop the message table
DROP TABLE IF EXISTS message;

-- Drop the chat table
DROP TABLE IF EXISTS chat;

-- Drop the business table
DROP TABLE IF EXISTS business;

-- Drop the user table
DROP TABLE IF EXISTS "user";

-- Drop the user table
DROP TABLE IF EXISTS users;

-- Drop the event table
DROP TABLE IF EXISTS event;
'''

INSERT_USER = """
            INSERT INTO users (id, businessId, name, username, email, bio, dateSignUp)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT (username) DO NOTHING;
        """

INSERT_USER_NO_DT = """
            INSERT INTO users (id, businessId, name, username, email, bio)
            VALUES (%s, %s, %s, %s, %s, %s)
            ON CONFLICT (username) DO NOTHING;
        """
        
RETRIEVE_USERS = '''
SELECT * FROM users;
'''

TEST_TABLE_CREATE = """
        CREATE TABLE usertest (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            username VARCHAR(255),
            email VARCHAR(255),
            bio TEXT,
            businessId VARCHAR(255)
        );
"""

VIEW_ALL_TABLES = """
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_schema = 'public';
"""