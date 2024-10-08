module.exports = (sequelize, DataTypes) => {
  const bookIssue = sequelize.define("bookissues", {
    issueID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bookID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    memberID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issueDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    returnDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issueStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issuedByID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  //bookIssue.sync({ alter: true });
  return bookIssue;
};
