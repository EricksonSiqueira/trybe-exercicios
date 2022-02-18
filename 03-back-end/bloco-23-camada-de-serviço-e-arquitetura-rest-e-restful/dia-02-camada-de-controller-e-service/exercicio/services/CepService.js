const Cep = require('../models/CepModel');
const validateCep = require('../schemes/validateCep');
const findByCep = async (cep) => {
  
  if (!validateCep(cep) || cep.length < 9) return { error: { code: '400', message: 'CEP inválido' } };
  
  const cepObj = await Cep.findByCep(cep);

  if(!cepObj || cepObj.length === 0) return { error: { code: '404', message: 'CEP não encontrado' } };

  return cepObj;
}

module.exports = { findByCep };
