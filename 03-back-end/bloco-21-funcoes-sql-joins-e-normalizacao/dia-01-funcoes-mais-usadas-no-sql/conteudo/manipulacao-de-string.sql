# em SQL a string começa do 1 e não do 0
#Uppercase
SELECT UCASE('Olá, eu sou unma stringzada');

#Lowercase
SELECT LCASE('Olá, sou uma ministring');

# Replace
SELECT REPLACE('Oi, eu sou uma stringzada', 'string', 'cadeira gamer de 2000 reais');

# Retorna a parte da esquerda de uma string de acordo com o número de caracteres especificados
SELECT LEFT('Oi, eu sou uma stringzada', 3); #Oi,

# Retorna a parte da direita de uma string de acordo com o número de caracteres especificados
SELECT RIGHT('Oi, eu sou uma stringzada', 6);# ngzada

# Retorna a quantidade de caracteres dessa string
SELECT CHAR_LENGTH('Oi, eu sou uma stringzada'); #25

#Extrai uma parte de uma string de acordo com os 2 parametros passados
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2); # eu
SELECT SUBSTRING('Oi, eu sou uma string', 5); #ei sou uma string

# Podemos usar esses metodos direto nas colunas do banco de dados
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

# Exercicios
SELECT UCASE('Trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo', 'DuckDuckgo', 'Google');
SELECT CHAR_LENGTH('Uma frase aqui');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 12, 12);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');