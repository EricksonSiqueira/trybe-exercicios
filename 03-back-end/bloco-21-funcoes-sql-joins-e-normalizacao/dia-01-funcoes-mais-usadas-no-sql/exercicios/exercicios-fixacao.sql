#Exercícios

SELECT MAX(SALARY) AS maior_salario FROM hr.employees;

SELECT MAX(SALARY) - MIN(SALARY) AS dif FROM hr.employees;

SELECT JOB_ID ,AVG(SALARY) AS MEDIA_SALARIAL FROM hr.employees GROUP BY JOB_ID ORDER BY MEDIA_SALARIAL DESC;

SELECT SUM(SALARY) AS paga_geral FROM hr.employees;

SELECT 
	MAX(SALARY) AS maior_salario, 
    MIN(SALARY) AS menor_salario, 
    SUM(SALARY) AS salarios_total, 
    ROUND(AVG(SALARY), 2) AS media_dos_salarios
FROM hr.employees;

SELECT JOB_ID, COUNT(*)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(SALARY) AS soma_dos_salarios
FROM hr.employees
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(SALARY) AS soma_dos_salarios
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT JOB_ID, ROUND(AVG(SALARY), 2) AS media_dos_salarios
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY media_dos_salarios DESC;

SELECT 
	DEPARTMENT_ID,
    COUNT(EMPLOYEE_ID) AS quantidade_de_funcionarios,
    ROUND(AVG(SALARY) ,2) AS media_salarial
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING quantidade_de_funcionarios > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777');

SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

SELECT UCASE(FIRST_NAME) FROM hr.employees;

SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE MONTH(HIRE_DATE) = 7;

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) FROM employees;

SELECT * FROM hr.employees;