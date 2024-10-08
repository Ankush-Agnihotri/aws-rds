const db = require("../models");
const libraryStaff = db.libraryStaff;

//add librarystaff
const addLibraryStaff = async (req, res) => {
  let data = {
    issuedByID: req.body.issuedByID,
    staffName: req.body.staffName,
    staffDesignation: req.body.staffDesignation,
  };

  const librarystaff = await libraryStaff.create(data);
  res.status(200).send(librarystaff);
  console.log(librarystaff);
};

//get all librarystaff

const getAlllibrarystaffDetails = async (req, res) => {
  const librarystaff = await libraryStaff.findAll();
  res.status(200).send(librarystaff);
  console.log(librarystaff);
};

//get librarystaff by id

const getlibrarystaffDetailByID = async (req, res) => {
  let issuedByID = req.params.issuedByID;
  const librarystaff = await libraryStaff.findOne({
    where: { issuedByID: issuedByID },
  });
  res.status(200).send(librarystaff);
  console.log(librarystaff);
};

//update book request by id

const updatelibrarystaffDetailByID = async (req, res) => {
  let issuedByID = req.params.issuedByID;
  const librarystaff = await libraryStaff.update(req.body, {
    where: { issuedByID: issuedByID },
  });
  res.status(200).send(librarystaff);
  console.log(librarystaff);
};

//delete librarystaff by id
const deletelibrarystaffDetailByID = async (req, res) => {
  let issuedByID = req.params.issuedByID;
  const librarystaff = await libraryStaff.destroy({
    where: { issuedByID: issuedByID },
  });
  res.status(200).send("staff details deleted succressfully....");
};

module.exports = {
  addLibraryStaff,
  getAlllibrarystaffDetails,
  getlibrarystaffDetailByID,
  updatelibrarystaffDetailByID,
  deletelibrarystaffDetailByID,
};
