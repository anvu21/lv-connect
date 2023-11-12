
CREATE_ALL_TABLES='''
        -- event table
        CREATE TABLE event (
            id VARCHAR(255) PRIMARY KEY,
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
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            username VARCHAR(255),
            email VARCHAR(255),
            bio TEXT,
            dateSignUp TIMESTAMP,
            businessId VARCHAR(255)
        );

        -- business table
        CREATE TABLE business (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            industry VARCHAR(255),
            address VARCHAR(255),
            phone VARCHAR(20),
            email VARCHAR(255),
            bio TEXT
        );

        -- chat table
        CREATE TABLE chat (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            description TEXT,
            date TIMESTAMP
        );

        -- message table
        CREATE TABLE message (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255) REFERENCES users(id),
            chat_id VARCHAR(255) REFERENCES chat(id),
            contents TEXT,
            date TIMESTAMP
        );

        -- comment table 
        CREATE TABLE comment (
            id VARCHAR(255) PRIMARY KEY,
            user_id VARCHAR(255)REFERENCES users(id),
            event_id VARCHAR(255) REFERENCES event(id),
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

INSERT_USER = '''
INSERT INTO users (id, businessId, name, username, email, bio, dateSignUp)
VALUES (%s, %s, %s, %s, %s, %s, %s)
ON CONFLICT (username) DO NOTHING;
'''

INSERT_USER_V2 = '''
INSERT INTO users (id, datesignup, name, username, email, bio, businessid)
VALUES (%s, %s, %s, %s, %s, %s, %s);
'''
        
RETRIEVE_USERS = '''
SELECT id, name, username, email, bio, CAST(dateSignUp AS VARCHAR), businessId FROM users;
'''

RETRIEVE_USERS_BY_ID = '''
SELECT id, name, username, email, bio, CAST(dateSignUp AS VARCHAR), businessId FROM users where id=%s;
'''

TEST_TABLE_CREATE = '''
CREATE TABLE usertest (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    bio TEXT,
    businessId VARCHAR(255)
);
'''

VIEW_ALL_TABLES = '''
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_schema = 'public';
'''

TEST_USER = '''
INSERT INTO users (id, datesignup, name, username, email, bio, businessid)
VALUES
  (1, '2023-11-11 12:34:56', 'John Doe', 'johndoe123', 'john.doe@example.com', 'A bio about John Doe', 'business123'),
  (2, '2023-11-12 08:45:30', 'Jane Smith', 'janesmith456', 'jane.smith@example.com', 'A bio about Jane Smith', 'business456');
'''

EVENT_INSERT = '''
INSERT INTO event (id, name, description, location, pictures, date, datePosted, type, comments)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
'''