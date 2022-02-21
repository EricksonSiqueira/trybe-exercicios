const Joi = require('joi');


const validateInfo = (productInfo) => {
  const schema = Joi.object({
    name: Joi.string()
      .max(100)
      .min(1)
      .required(),
    brand: Joi.string()
      .max(100)
      .min(1)
      .required()
  });

  const validation = schema.validate(productInfo);

  return validation;
}

module.exports = { validateInfo };
