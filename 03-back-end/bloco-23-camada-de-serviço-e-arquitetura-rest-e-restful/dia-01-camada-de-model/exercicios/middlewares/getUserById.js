const User = require('../models/User');

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(Number(id));

  if (!user) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  });

  return res.status(200).json(user);
}

module.exports = getUserById;