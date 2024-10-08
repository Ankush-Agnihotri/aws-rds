module.exports = (sequelize, DataTypes) => {
  const libraryStaff = sequelize.define("librarystaffs", {
    issuedByID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    staffName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    staffDesignation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return libraryStaff;
};
