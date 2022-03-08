const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE,
  });

  return Book;
}

module.exports = Book;
