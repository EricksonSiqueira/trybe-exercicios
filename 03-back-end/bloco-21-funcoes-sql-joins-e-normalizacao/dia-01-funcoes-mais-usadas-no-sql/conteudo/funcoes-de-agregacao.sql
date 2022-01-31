-- Usando a coluna replacement_cost (valor de substituição) vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

# exercicios
SELECT ROUND(AVG(length)) AS 'Média de duração' FROM sakila.film;
SELECT MIN(length) AS 'Duração mínima' FROM sakila.film;
SELECT MAX(length) AS 'Duração máxima' FROM sakila.film;
SELECT SUM(length) AS 'Tempo de exibição total' FROM sakila.film;
SELECT COUNT(film_id) AS 'Total de filmes cadastrados na nossa plataforma' FROM sakila.film;