module.exports = (sequelize, DataTypes) => {
  const bookRequest = sequelize.define("bookrequests", {
    requestID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      auroIncrement: true,
    },

    requestDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return bookRequest;
};
