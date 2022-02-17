const connection = require('./connection');

const serialize = (authorData) => {
  const fullName = [authorData.first_name, authorData.middle_name, authorData.last_name]
    .filter((name) => name)
    .join(' ');
  return{
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
    fullName
  };
}

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize);
}

module.exports = { 
  getAll,
}