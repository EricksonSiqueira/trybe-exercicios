const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
  try {
    const { username, password } = req.body;

    if(!username || !password) return res.status(401).json({message: 'É nessario usuario e senha para realizar o login'});

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256'
    }

    let token;

    if (username === 'admin' && password === 's3nh4S3gur4???'){
      token = jwt.sign({ username, admin: true }, 'segredo', jwtConfig);
    } else {
      token = jwt.sign({ username, admin: false }, 'segredo', jwtConfig);
    }

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};