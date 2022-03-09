const username = (req, res, next) => {
  const { username } =  req.body;

  if(typeof username !== 'string' || username.length < 5) {
    return res.status(400).json({message: 'Nome inválido'});
  }

  next();
}

const password = (req, res, next) => {
  const { password } = req.body;

  if (typeof password !== 'string' || password.length < 5) {
    return res.status(400).json({ message: 'Password inválido' });
  }

  next();
}

module.exports = {
  username,
  password,
}