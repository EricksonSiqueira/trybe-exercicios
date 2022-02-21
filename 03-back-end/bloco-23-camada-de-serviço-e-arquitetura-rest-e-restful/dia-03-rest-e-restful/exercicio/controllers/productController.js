const express = require('express');
const ProductService = require('../services/productService');

const router = express.Router();

router.get('/', async (req, res, _next) => {
  const products = await ProductService.getAll();

  return res.status(200).json(products);
});

router.get('/:id', async (req, res, _next) => {
  const product = await ProductService.getById(req.params.id);

  if(!product) return res.status(404).json({ message: 'Produto não encontrado'});

  return res.status(200).json(product);
});

router.post('/', async (req, res, _next) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.add(name, brand);

  if(!newProduct) return res.status(400).json({ message: 'Produto não foi adicionado.'});

  return res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res, _next) => {
  const product = await ProductService.exclude(req.params.id);

  if(!product) return res.status(400).json({ message: 'Produto não foi deletado.'})

  return res.status(200).json(product);
});

router.put('/:id', async (req, res, _next) => {
  const { name, brand } = req.body;

  const product = await ProductService.update(req.params.id, name, brand);

  if(!product) return res.status(400).json({ message: 'Produto não foi atualizado.'})

  return res.status(200).json(product);
});

module.exports = router;