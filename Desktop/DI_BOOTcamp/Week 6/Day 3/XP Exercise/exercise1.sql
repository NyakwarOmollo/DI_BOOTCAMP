-- 1. All languages
SELECT * 
FROM language;
-- 2. Films with their language
SELECT f.title, f.description, l.name AS language
FROM film f
JOIN language l ON f.language_id = l.language_id;
-- 3. All languages even without films (LEFT JOIN)
SELECT f.title, f.description, l.name AS language
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;
-- 4. Create new_film table
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Insert sample films
INSERT INTO new_film (name) VALUES
('Film One'),
('Film Two');


-- 5. Create customer_review table
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 6. Insert 2 reviews
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Great Movie', 9, 'Amazing film!'),
(2, 1, 'Not Bad', 7, 'Pretty good watch');


-- 7. Delete a film (CASCADE effect)
DELETE FROM new_film WHERE id = 1;

-- 1. Update film language
UPDATE film
SET language_id = 2
WHERE film_id = 1;


-- 2. Check foreign keys on customer table
SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
     ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage ccu
     ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer'
AND tc.constraint_type = 'FOREIGN KEY';


-- 3. Drop customer_review table
DROP TABLE customer_review;




-- 4. Rentals not returned
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;


-- 5. 30 most expensive outstanding movies
SELECT f.title, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;




-- 1st film (Sumo wrestler + Penelope Monroe)
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%'
AND a.first_name = 'Penelope'
AND a.last_name = 'Monroe';


-- 2nd film (Short documentary < 1hr, rated R)
SELECT title
FROM film
WHERE length < 60
AND rating = 'R'
AND description ILIKE '%documentary%';


-- 3rd film (Matthew Mahan, > $4, date range)
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON p.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND p.amount > 4
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


-- 4th film (Matthew Mahan + "boat" + expensive)
SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew'
AND c.last_name = 'Mahan'
AND (
    f.title ILIKE '%boat%' OR
    f.description ILIKE '%boat%'
)
ORDER BY f.replacement_cost DESC;