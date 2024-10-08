const { where } = require("sequelize");
const db = require("../models");
const Location = db.Location;

//add location
const addLocation = async (req, res) => {
  const data = {
    locationID: req.body.locationID,
    shelfNumber: req.body.shelfNumber,
    shelfName: req.body.shelfName,
    floorNumber: req.body.floorNumber,
  };

  const location = await Location.create(data);
  res.status(200).send(location);
  console.log(location);
};

//get all locations
const getAllLocation = async (req, res) => {
  const location = await Location.findAll();
  res.status(200).send(location);
  console.log(location);
};

//get location by id
const getSingleLocation = async (req, res) => {
  const location = await Location.findOne({
    where: { locationID: locationID },
  });
  res.status(200).send(location);
  console.log(location);
};
//update location by id
const updateLocation = async (req, res) => {
  const location = await Location.update(req.body, {
    where: { locationID: locationID },
  });
  res.status(200).send(location);
  console.log(location);
};

//delete location by id
const deleteLocation = async (req, res) => {
  const location = await Location.destroy({
    where: { locationID: locationID },
  });
  res.status(200).send(location);
  console.log(location);
};

module.exports = {
  addLocation,
  getAllLocation,
  getSingleLocation,
  updateLocation,
  deleteLocation,
};
