const connection = require('./connection');

const findByCep = async (cep) => {
  try {
    const [cepObj] = await connection.execute('SELECT * FROM cep_lookup.ceps WHERE cep = ?', [cep]);

    return cepObj;
  } catch (err) {
    return false;
  };
};

const postCep = async (cepInfo) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = cepInfo;
    await connection.execute('INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
      [cep, logradouro, bairro, localidade, uf]);
    
      return cepInfo;
  } catch (err) {
    console.log(err);
    return err;
  };
}

module.exports = { findByCep, postCep };
