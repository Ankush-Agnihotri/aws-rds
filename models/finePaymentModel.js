module.exports = (sequelize, DataTypes) => {
  const finePayment = sequelize.define("finepayments", {
    finePaymentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    memberID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paymentAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return finePayment;
};
