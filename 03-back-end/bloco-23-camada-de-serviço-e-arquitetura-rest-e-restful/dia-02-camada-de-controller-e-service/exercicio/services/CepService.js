const CepModel = require('../models/CepModel');
const validateCep = require('../schemes/validateCep');
const findByCep = async (cep) => {
  
  if (!validateCep(cep) || cep.length < 9) return { error: { code: '400', message: 'CEP inválido' } };
  
  const cepObj = await CepModel.findByCep(cep);

  if(!cepObj || cepObj.length === 0) return { error: { code: '404', message: 'CEP não encontrado' } };

  return cepObj;
}

const postCep = async (cepInfo) => {
  
  const { cep } = cepInfo;
  const cepFound = await CepModel.findByCep(cep);
  
  if (cepFound.length !== 0) return { error: { code: '409', message: 'CEP já existente'}};
  
  const cepObj = await CepModel.postCep(cepInfo);

  return cepObj;
}

module.exports = { findByCep, postCep };
