USE hr;
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;
    
SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    COUNT(*) AS "Quantidade de pessoas lideradas"
FROM
    employees AS Manager
INNER JOIN
    employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY Manager.EMPLOYEE_ID;
    
    
SELECT * FROM employees;