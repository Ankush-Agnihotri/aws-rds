module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("categories", {
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Category;
};
