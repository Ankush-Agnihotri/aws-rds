module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define("publishers", {
    publisherID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    publisherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publicationLanguage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publicationType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Publisher;
};
