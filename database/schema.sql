DROP DATABASE IF EXISTS balance_db;
CREATE DATABASE balance_db;

use balance_db;

CREATE TABLE questions
(
    id INTEGER
    AUTO_INCREMENT NOT NULL,
    question VARCHAR
    (255) NOT NULL,
    user_res INTEGER,
    createdAt DATETIME,
    PRIMARY KEY
    (id)
);

    CREATE TABLE moods
    (
        id INTEGER
        AUTO_INCREMENT NOT NULL,
    mood_name VARCHAR
        (255) NOT NULL,
        rating INTEGER,
    createdAt DATETIME,
    PRIMARY KEY
        (id) 
);

        CREATE TABLE activities
        (
            id INTEGER
            AUTO_INCREMENT NOT NULL,
    name VARCHAR
            (255) NOT NULL,
    createdAt DATETIME,
    PRIMARY KEY
            (id) 
)
