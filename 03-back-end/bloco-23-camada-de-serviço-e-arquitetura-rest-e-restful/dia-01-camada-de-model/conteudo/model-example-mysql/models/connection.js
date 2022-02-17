const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'Erickson',
  password: '94241260',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;
