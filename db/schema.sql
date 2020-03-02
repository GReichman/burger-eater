DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id integer auto_increment,
    burger_name varchar(30),
    devoured boolean DEFAULT 0,
    primary key(id)
);