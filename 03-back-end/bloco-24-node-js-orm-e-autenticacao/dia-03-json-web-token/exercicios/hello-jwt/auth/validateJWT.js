const jwt = require('jsonwebtoken');

  module.exports = (token) => {
  try {
    const user = jwt.verify(token, 'segredo');

    return user;
  } catch (err) {
    console.log(err.message);

    return undefined;
  }
}