const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
  try {
    const { username, password } = req.body;

    if(!username || !password) return res.status(401).json({message: 'É nessario usuario e senha para realizar o login'});

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256'
    }

    const token = jwt.sign({ username, admin: false }, 'segredo', jwtConfig);

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};