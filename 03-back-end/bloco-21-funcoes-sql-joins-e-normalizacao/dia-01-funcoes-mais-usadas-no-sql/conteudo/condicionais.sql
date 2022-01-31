# Condições em SQL
#SELECT IF (CONDICAO, VERDADEIRO, FALSO)

SELECT title, IF (rental_rate > 0.99, 'CARO', 'BARATO') AS preço
FROM sakila.film;

SELECT title, rental_rate,
	CASE
		WHEN rental_rate = 0.99 THEN 'BARATO'
        WHEN rental_rate = 2.99 THEN 'MÉDIO'
        WHEN rental_rate = 4.99 THEN 'CARO'
	ELSE 'NÃO CLASSIFICADO'
END AS valor
FROM sakila.film 
LIMIT 10;

-- Sintaxe
SELECT first_name, IF(active, 'Cliente ativo', 'Cliente inativo') AS status
FROM sakila.customer
LIMIT 20;

SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;

#exercicios
SELECT film_id, title, IF(title = 'ACE GOLDFINGER', 'Já assisti esse filme', 'Nunca nem vi') AS 'conheço o filme?' 
FROM sakila.film;

SELECT 
	title,
    rating,
    CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
END AS 'classificação indicativa'
FROM sakila.film;
