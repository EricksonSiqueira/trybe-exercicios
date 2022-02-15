const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (request, response, next) => {
  const { username, password } = request.body;

  if(!username || !password) {
    return response.status(400).json({ error: 'Username or password cannot be empty' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (username !== foundUser.username || password !== foundUser.password) {
    return response.status(401).json({ error: 'Invalid username or password' });
  }

  req.user = foundUser;

  next();
};

module.exports = authMiddleware;