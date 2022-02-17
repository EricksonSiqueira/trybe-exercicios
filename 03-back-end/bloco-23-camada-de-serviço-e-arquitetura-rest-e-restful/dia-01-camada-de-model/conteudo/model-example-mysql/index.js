const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.post('/authors', async (req, res, _next) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Author.isValid(first_name, middle_name, last_name)){
    return res.status(400).json({ message: 'Invalid data'});
  }

  const authorId = await Author.add(first_name, middle_name, last_name);

  return res.status(200).json({ id: authorId, first_name, middle_name, last_name});
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if(!author) return res.json(404).json({ message: 'Author not found' });

  return res.status(200).json(author);
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
