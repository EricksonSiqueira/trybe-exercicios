const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'Erickson',
  password: '94241260',
  database: 'rest_exercicios'
});

module.exports = connection;
