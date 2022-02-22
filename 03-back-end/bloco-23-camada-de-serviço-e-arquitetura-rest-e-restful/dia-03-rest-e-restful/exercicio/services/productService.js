const ProductModel = require('../models/productModel');
const schemaProduct = require('../schemas/schemaProduct');

const getAll = async () => {
  const products = await ProductModel.getAll();

  return products;
};

const getById = async (id) => {
  const products = await ProductModel.getById(id);

  return products;
};

const add  = async (name, brand) => {
  const isValid =  schemaProduct.validateInfo({ name, brand });

  if(isValid.error) return null;


  const product = await ProductModel.add(name, brand)

  return product;
};

const exclude = async (id) => {
  if(!id) return null;

  const product = await ProductModel.exclude(id);

  return product;
};

const update = async (id, name, brand) => {
  const isValid = schemaProduct.validateInfo({ name, brand });

  if(!id || isValid.error) return null;

  const product = await ProductModel.update(id, name, brand);

  return product;
};


module.exports = { add, getAll, getById, update, exclude };
