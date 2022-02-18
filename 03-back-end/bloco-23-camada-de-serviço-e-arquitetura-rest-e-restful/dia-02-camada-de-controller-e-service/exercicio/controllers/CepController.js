const Cep = require('../services/CepService');

const findByCep = async (req, res) => {
  const { cep } = req.params;

  const cepObj = await Cep.findByCep(cep);

  if (cepObj.error) return res.status(cepObj.error.code); json(cepObj.error.message);

  return res.status(200).json(cepObj);
};

module.exports = { findByCep };
