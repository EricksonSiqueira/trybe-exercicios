const connection = require('./connection');

const findByCep = async (cep) => {
  try {
    const [cepObj] = await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]);
    
    return cepObj;
  } catch (err) {
    console.log(err);
    return false;
  };
};

module.exports = { findByCep };
