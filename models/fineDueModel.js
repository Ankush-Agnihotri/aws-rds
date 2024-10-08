module.exports = (sequelize, DataTypes) => {
  const fineDue = sequelize.define("finedues", {
    fineID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    memberID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issueID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fineDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fineTotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return fineDue;
};
