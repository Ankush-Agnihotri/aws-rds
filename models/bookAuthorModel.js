module.exports = (sequelize, DataTypes) => {
  const bookAuthor = sequelize.define("bookauthors", {
    bookID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "books",
        key: "bookID",
      },
    },
    authorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "authors",
        key: "authorID",
      },
    },
  });
  return bookAuthor;
};
