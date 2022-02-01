/*SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum; */

# sem alias
SELECT sakila.actor.first_name, actor_id, sakila.film_actor.actor_id
FROM sakila.actor
INNER join film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id;

#com alias
SELECT ac.first_name, ac.actor_id, fil.actor_id
FROM sakila.actor AS ac
INNER JOIN sakila.film_actor AS fil
ON ac.actor_id = fil.actor_id;

#com alias omitido
SELECT act.first_name, act.actor_id, fil.actor_id
FROM sakila.actor act
INNER JOIN sakila.film_actor fil
ON act.actor_id = fil.actor_id;

#exercicios
SELECT act.actor_id, act.first_name, fil.film_id
FROM sakila.actor act
INNER JOIN sakila.film_actor fil
ON act.actor_id = fil.actor_id;

SELECT stf.first_name, stf.last_name, adr.address
FROM sakila.staff stf
INNER JOIN sakila.address adr
ON stf.address_id = adr.address_id;

SELECT ctm.customer_id, CONCAT(ctm.first_name, ' ', ctm.last_name) AS name, ctm.email, adr.address_id, adr.address
FROM sakila.customer ctm
INNER JOIN sakila.address adr
ON ctm.address_id = adr.address_id
LIMIT 100;
