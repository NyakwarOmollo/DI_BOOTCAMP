-- Create tables
CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE customer_profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id INT UNIQUE REFERENCES customer(id) ON DELETE CASCADE
);

-- Insert customers
INSERT INTO customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert profiles (subqueries)
INSERT INTO customer_profile (isLoggedIn, customer_id)
VALUES 
(TRUE, (SELECT id FROM customer WHERE first_name = 'John')),
(FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome'));

-- Queries
-- LoggedIn customers
SELECT c.first_name
FROM customer c
JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- All customers + login status
SELECT c.first_name, cp.isLoggedIn
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- Count NOT logged in
SELECT COUNT(*)
FROM customer c
LEFT JOIN customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;

-- Create tables
CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

CREATE TABLE student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age <= 15)
);

CREATE TABLE library (
    book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Insert books
INSERT INTO book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To Kill a Mockingbird', 'Harper Lee');

-- Insert students
INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Insert borrow records (subqueries)
INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
VALUES
(
 (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
 (SELECT student_id FROM student WHERE name = 'John'),
 '2022-02-15'
),
(
 (SELECT book_id FROM book WHERE title = 'To Kill a Mockingbird'),
 (SELECT student_id FROM student WHERE name = 'Bob'),
 '2021-03-03'
),
(
 (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
 (SELECT student_id FROM student WHERE name = 'Lera'),
 '2021-05-23'
),
(
 (SELECT book_id FROM book WHERE title = 'Harry Potter'),
 (SELECT student_id FROM student WHERE name = 'Bob'),
 '2021-08-12'
);

-- Queries

-- All records in junction table
SELECT * FROM library;

-- Student names + borrowed books
SELECT s.name, b.title
FROM library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

-- Average age of students who borrowed Alice In Wonderland
SELECT AVG(s.age)
FROM student s
JOIN library l ON s.student_id = l.student_fk_id
JOIN book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student (CASCADE test)
DELETE FROM student WHERE name = 'John';

-- Check remaining records
SELECT * FROM library;