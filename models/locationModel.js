module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("locations", {
    locationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allownull: false,
    },
    shelfNumber: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    shelfName: {
      type: DataTypes.STRING,
      allownull: false,
    },
    floorNumber: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
  });
  return Location;
};
