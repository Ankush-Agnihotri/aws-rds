module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("books", {
    bookID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ISBNCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookEdition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    copiesTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    copiesAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    publisherID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    locationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Book;
};
