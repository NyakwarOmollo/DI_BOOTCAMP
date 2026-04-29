
-- EXERCISE 1

-- 1. All items ordered by price (ASC)
SELECT * FROM items ORDER BY price ASC;

-- 2. Items with price >= 80 (DESC)
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;

-- 3. First 3 customers (A–Z)
SELECT first_name, last_name 
FROM customers 
ORDER BY first_name ASC 
LIMIT 3;

-- 4. Last names (Z–A)
SELECT last_name 
FROM customers 
ORDER BY last_name DESC;



-- EXERCISE 2 (dvdrental)


-- 1. All customers
SELECT * FROM customer;

-- 2. Full name alias
SELECT first_name || ' ' || last_name AS full_name 
FROM customer;

-- 3. Unique create dates
SELECT DISTINCT create_date 
FROM customer;

-- 4. Customers DESC
SELECT * 
FROM customer 
ORDER BY first_name DESC;

-- 5. Film details sorted by rental rate
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;

-- 6. Address + phone (Texas)
SELECT address, phone 
FROM address 
WHERE district = 'Texas';

-- 7. Movies with ID 15 or 150
SELECT * 
FROM film 
WHERE film_id IN (15, 150);

-- 8. Favorite movie (edit name)
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Your Movie Name';

-- 9. Movies starting with letters (edit AB)
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'AB%';

-- 10. 10 cheapest movies
SELECT * 
FROM film 
ORDER BY rental_rate ASC 
LIMIT 10;

-- 11. Next 10 cheapest
SELECT * 
FROM film 
ORDER BY rental_rate ASC 
OFFSET 10 LIMIT 10;

-- 12. Customer + payments
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 13. Movies NOT in inventory
SELECT * 
FROM film 
WHERE film_id NOT IN (SELECT film_id FROM inventory);

-- 14. City + country
SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

-- BONUS: Sales performance
SELECT c.customer_id, c.first_name, c.last_name, 
       p.amount, p.payment_date, p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;