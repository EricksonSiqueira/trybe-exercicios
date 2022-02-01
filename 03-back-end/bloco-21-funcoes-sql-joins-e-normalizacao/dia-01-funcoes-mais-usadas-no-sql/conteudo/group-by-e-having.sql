SELECT first_name FROM sakila.actor
GROUP BY first_name; # Evita duplicações

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name; #Conta quantas repetições tem de cada nome

SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(replacement_cost) AS 'custo de reposição'
FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(replacement_cost) AS 'valor máximo'
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(replacement_cost) AS 'somatório custo de resposição'
FROM sakila.film
GROUP by rating;

#exercicios
SELECT active, COUNT(active)
FROM sakila.customer
GROUP BY active;

SELECT store_id, COUNT(active)
FROM sakila.customer
GROUP BY store_id;

SELECT rating ,AVG(rental_duration)
FROM sakila.film
GROUP BY(rating)
ORDER BY AVG(rental_duration) DESC;

SELECT district, COUNT(*) AS `quantidade por distrito`
FROM sakila.address
GROUP BY district
ORDER BY `quantidade por distrito`, district;

#HAVING
SELECT district, COUNT(*) AS `quantidade por distrito`
FROM sakila.address
GROUP BY district
HAVING `quantidade por distrito` > 5
ORDER BY `quantidade por distrito`, district;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- Porém com `` funciona
SELECT first_name, COUNT(*) AS `nomes cadastrados`
FROM sakila.actor
GROUP BY first_name
HAVING `nomes cadastrados` > 2;

#exercicios
SELECT rating, AVG(length) AS duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) AS `total do custo de substituição`
FROM sakila.film
GROUP by rating
HAVING `total do custo de substituição` > 3950.50
ORDER BY `total do custo de substituição`;
