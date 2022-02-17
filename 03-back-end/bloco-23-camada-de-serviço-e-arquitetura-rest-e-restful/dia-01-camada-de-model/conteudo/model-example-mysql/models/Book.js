const connection = require('./connection');

const serialize = (bookData) => {
  const { id, title, author_id: authorId } = bookData;

  return {
    id,
    title,
    authorId,
  }
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');

  return books.map(serialize);
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books');
  const filteredBooks = books.filter((book) => book.author_id === id);

  return filteredBooks.map(serialize);
}

module.exports = { 
  getAll,
  getByAuthorId,
}