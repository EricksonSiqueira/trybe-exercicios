const express = require('express');

const { Book } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByFk(id);

    if(!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt } = req.body;
    const newBook = await Book.create(({ title, author, pageQuantity, createdAt }));

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity, createdAt } = req.body;
    const updateBook = await Book.update((
      { title, author, pageQuantity, createdAt },
      { where: { id } } 
      ));

    if (!updateBook) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso' });
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy({ where: { id } });

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;

