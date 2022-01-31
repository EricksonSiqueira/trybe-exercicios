# DIV = divisão
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5

# MOD = resto
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0

#exercicio
SELECT IF(15 MOD 2 = 0,'Par', 'Impar' );
SELECT 220 DIV 12 AS 'quantos grupos', 220 MOD 12 AS 'lugares sobrando';

#Arredondando valores
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.812737126312); #11
SELECT ROUND(2.1238712387); #2
SELECT ROUND(2.123123123, 4); #2.1231

#Arredonda pra cima
SELECT CEIL(2.12321312); #3

#Arredonda para baixo
SELECT FLOOR(2.1238123123);# 2

#Potencia
SELECT POW(2, 2);# 4
SELECT POW(2, 4);# 16

#Raiz quadrada
SELECT SQRT(9); #3
SELECT SQRT(16); #4

#Gerando valores aleatórios

-- Valor aleatório de 0 a 1
SELECT RAND();

-- Para gerar um valor entre 5 e 10
SELECT ROUND(5 + (Rand() * 5));
-- O cálculo que é feito é o seguinte: (5 + (0.0 a 1.0 * 5))

#Exercicios 
SELECT ROUND(15 + (Rand() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);
