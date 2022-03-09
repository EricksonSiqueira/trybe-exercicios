const validateJWT = require('../auth/validateJWT');

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

const JWT = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).json({ message: 'Token not found' });

    const userData = validateJWT(authorization);

    if(!userData) return res.status(401).json({ message: '401 Unauthorized'});

    req.userData = userData;
    next();
  } catch (err) {
    console.log(err.message);

    return res.status(500).json({ message: 'Something has gone wrong' });
  }
}

module.exports = {
  username,
  password,
  JWT,
}