-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Neel30Jan80';
-- Drops the ice_creamDB if it exists currently --
 DROP DATABASE IF EXISTS restaurantDB;
-- Creates the "favorite_db" database --
CREATE DATABASE restaurantDB;

USE restaurantDB;

CREATE TABLE reservations(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255),
phone BIGINT,
wait_list BOOLEAN DEFAULT(1)
);

INSERT INTO reservations (name, email, phone)
VALUES ("John Smith", "johnsmith@gmail.com", 5555555555);

SELECT * FROM reservations;