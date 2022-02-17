const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/search', async (req, res) => {
  const { author_id: authorId } = req.query;

  const books = await Book.getByAuthorId(Number(authorId));

  return res.status(200).json(books);
});

app.get('/books', async (req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
});



app.listen(port, () => console.log(`Rodando na porta ${port}`));
