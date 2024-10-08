module.exports = (sequelize, DataTypes) => {
  const memberStatus = sequelize.define("membersstatus", {
    activeStatusID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    accountType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    membershipStartDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    membershipEndDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return memberStatus;
};
