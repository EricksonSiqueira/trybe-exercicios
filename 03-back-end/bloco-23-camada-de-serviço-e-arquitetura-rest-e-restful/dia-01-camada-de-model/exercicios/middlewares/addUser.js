const User = require('../models/User');
const addUser = async (req, res, _next) => {
  const { first_name, last_name, email, password } = req.body;

  if (!User.isValid(first_name, last_name, email, password)) return res.status(400).json({ message: 'Invalid data' });

  const user = await User.add(first_name, last_name, email, password);

  return res.status(200).json(user);
}

module.exports = addUser;
