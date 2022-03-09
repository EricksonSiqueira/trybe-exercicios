module.exports = (req, res) => {
  try {
    const { userData } = req;

    return res.status(200).json(userData);
  } catch (err) {
    console.log(err.message);
  }
}