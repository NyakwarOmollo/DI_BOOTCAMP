CREATE DATABASE public;
USE public;
CREATE TABLE items (
    item_id     INT PRIMARY KEY,
    item_name   VARCHAR(100) NOT NULL,
    price       DECIMAL(10,2) NOT NULL
);
CREATE TABLE customers (
    customer_id   INT PRIMARY KEY,
    first_name    VARCHAR(50) NOT NULL,
    last_name     VARCHAR(50) NOT NULL
);
INSERT INTO items (item_id, item_name, price) VALUES
(1, 'Small Desk', 100),
(2, 'Large Desk', 300),
(3, 'Fan', 80);
INSERT INTO customers (customer_id, first_name, last_name) VALUES
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');