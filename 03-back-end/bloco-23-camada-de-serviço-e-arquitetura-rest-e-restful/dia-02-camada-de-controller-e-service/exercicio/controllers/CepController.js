const CepService = require('../services/CepService');
const validateAllCepInfo = require('../schemes/validateAllCepInfo');

const findByCep = async (req, res) => {
  const { cep } = req.params;

  const cepObj = await CepService.findByCep(cep);
  
  if (cepObj.error) return res.status(cepObj.error.code).json(cepObj.error.message);

  return res.status(200).json(cepObj);
};

const postCep = async (req, res) => {
  const cepInfo = req.body;

  const isValid = validateAllCepInfo(cepInfo);

  if(isValid.error) return res.status(400).json(isValid.error.details[0].message)

  const cepObj = await CepService.postCep(cepInfo);

  return res.status(200).json(cepObj);
}

module.exports = { findByCep, postCep };
