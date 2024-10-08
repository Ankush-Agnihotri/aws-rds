module.exports = (sequelize, DataTypes) => {
  const bookRequestStatus = sequelize.define("bookrequestsstatus", {
    availableStatusID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    availableStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nearlyAvailableDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return bookRequestStatus;
};
