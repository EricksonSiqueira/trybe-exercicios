const connection = require('./connection');

const validateFirstName = (firstName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  return true;
}

const validateLastName = (lastName) => {
  if (!lastName || typeof lastName !== 'string') return false;
  return true;
}

const validatePassword = (password) => {
  if (!password || password.length < 8) return false;
  return true;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const isValid = (firstName, lastName, email, password) => {
  if(!validateFirstName(firstName) || !validateLastName(lastName) || !validateEmail(email) || !validatePassword(password)){
    return false;
  }

  return true;
}

const add = async (firstName, lastName, email, password) => {
  
  try {
    const [user] = await connection.execute('INSERT INTO model_example.user(first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, password]);
    return {
      id: user.insertId,
      firstName,
      lastName,
      email,
      password
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = { 
  add,
  isValid,
}
