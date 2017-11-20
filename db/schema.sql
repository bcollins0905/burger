### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	order_placed TIMESTAMP,
	PRIMARY KEY (id)
);




-- Create the database movie_planner_db and specified it for use.
-- DROP DATABASE IF EXISTS burger_db;
-- CREATE DATABASE burger_db;
-- USE burger_db;

-- -- Create the table plans.
-- CREATE TABLE burgers
-- (
-- id int NOT NULL AUTO_INCREMENT,
-- burger_name VARCHAR (255) NOT NULL,
-- devoured BOOLEAN DEFAULT false,
-- order_placed TIMESTAMP,
-- PRIMARY KEY (id)
-- );

