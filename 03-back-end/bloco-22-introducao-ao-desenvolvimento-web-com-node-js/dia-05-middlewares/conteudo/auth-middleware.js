const validUser = {
  username: 'erickson',
  password: 'senhamuitosegura'
};

const authMiddleware = (request, response, next) => {
  const { username, password } = request.body;

  if(!username || !password) {
    return response.status(400).json({ error: 'Username or password cannot be empty' });
  }
  if (username !== validUser.username || password !== validUser.password) {
    return response.status(401).json({ error: 'Invalid username or password' });
  }

  next();
};

module.exports = authMiddleware;