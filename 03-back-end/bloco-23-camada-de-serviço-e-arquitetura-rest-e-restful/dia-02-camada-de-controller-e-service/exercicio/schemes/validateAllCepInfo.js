const Joi = require('joi');

// const teste = {
//   "cep": "01001-00",
//   "logradouro": "Praça da Sé",
//   "bairro": "Sé",
//   "localidade": "São Paulo",
//   "uf": "SP",
// }

const validateAllCepInfo = (cepInfo) => {

  const schema = Joi.object({
    cep: Joi.string()
      .pattern(new RegExp(/^[0-9]{5}-[0-9]{3}$/))
      .required(),
    logradouro: Joi.string()
      .max(50)
      .required(),
    bairro: Joi.string()
      .max(20)
      .required(),
    localidade: Joi.string()
      .max(20)
      .required(),
    uf: Joi.string()
      .max(2)
      .min(2)
      .required(),
  });

  const validation = schema.validate(cepInfo);

  return validation;
}

// console.log(validateAllCepInfo(teste));


module.exports = validateAllCepInfo;
