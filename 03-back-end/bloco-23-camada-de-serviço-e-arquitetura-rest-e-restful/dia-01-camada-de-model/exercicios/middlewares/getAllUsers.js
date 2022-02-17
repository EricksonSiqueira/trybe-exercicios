const User = require('../models/User');

const getAllUsers = async (req, res) => {
  const users = await User.getAll();
  return res.status(200).json(users);
}

module.exports = getAllUsers;
