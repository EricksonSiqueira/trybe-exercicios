module.exports = (req, res, next) => {
  const { userData } = req;
  const { admin } = userData;

  if(admin === false) return res.status(403).json({ message: 'Restricted acess' });

  next();
}