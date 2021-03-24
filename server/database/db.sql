-- users table
CREATE DATABASE db_firstweb;

USE db_firtsweb;

CREATE TABLE users(
    id INT(11) NOT NULL,
    email VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

-- links table

CREATE TABLE items (
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    review TEXT,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE items
    ADD PRIMARY KEY (id);

ALTER TABLE items
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE items;