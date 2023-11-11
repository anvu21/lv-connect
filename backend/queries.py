
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