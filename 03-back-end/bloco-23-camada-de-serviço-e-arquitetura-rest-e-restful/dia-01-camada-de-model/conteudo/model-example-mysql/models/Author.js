const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
})

const getAll = async () => {
  try {
    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
    return authors.map(serialize).map(getNewAuthor);

  } catch (error) {
    console.error(error);
    return null;
  }

}

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?'
    , [id]);
  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({ id, firstName, middleName, lastName });
}

const isValid = (firstName, _middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

const add = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)', 
  [firstName, middleName, lastName]);

  return author.insertId;
}

module.exports = { 
  getAll,
  findById,
  isValid,
  add
}