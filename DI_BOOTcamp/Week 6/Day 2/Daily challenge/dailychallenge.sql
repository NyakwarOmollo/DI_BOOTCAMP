SELECT 'Q1' AS question,
       COUNT(*) AS answer
FROM FirstTab ft
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NULL
)

UNION ALL

SELECT 'Q2',
       COUNT(*)
FROM FirstTab ft
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id = 5
)

UNION ALL

SELECT 'Q3',
       COUNT(*)
FROM FirstTab ft
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab
)

UNION ALL

SELECT 'Q4',
       COUNT(*)
FROM FirstTab ft
WHERE ft.id NOT IN (
    SELECT id FROM SecondTab WHERE id IS NOT NULL
);