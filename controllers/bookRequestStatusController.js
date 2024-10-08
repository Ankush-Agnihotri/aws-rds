const db = require("../models");
const bookRequestStatus = db.bookRequestStatus;

//add bookrequest status
const addBookRequestStatus = async (req, res) => {
  let data = {
    availableStatusID: req.body.availableStatusID,
    availableStatus: req.body.availableStatus,
    nearlyAvailableDate: req.body.nearlyAvailableDate,
  };

  const bookrequeststatus = await bookRequestStatus.create(data);
  res.status(200).send(bookrequeststatus);
  console.log(bookrequeststatus);
};

//get all bookrequest status

const getAllbookRequestStatus = async (req, res) => {
  const bookrequeststatus = await bookRequestStatus.findAll();
  res.status(200).send(bookrequeststatus);
  console.log(bookrequeststatus);
};

//get bookrequest status by id

const getBookRequestStatusByID = async (req, res) => {
  let availableStatusID = req.params.availableStatusID;
  const bookrequeststatus = await bookRequestStatus.findOne({
    where: { availableStatusID: availableStatusID },
  });
  res.status(200).send(bookrequeststatus);
  console.log(bookrequeststatus);
};

//update book request status by id

const updateBookRequestByID = async (req, res) => {
  let availableStatusID = req.params.availableStatusID;
  const bookrequeststatus = await bookRequestStatus.update(req.body, {
    where: { availableStatusID: availableStatusID },
  });
  res.status(200).send(bookrequeststatus);
  console.log(bookrequeststatus);
};

//delete bookrequest status by id

const deleteBookRequestStatusByID = async (req, res) => {
  let availableStatusID = req.params.availableStatusID;
  const bookrequeststatus = await bookRequestStatus.destroy({
    where: { availableStatusID: availableStatusID },
  });
  res.status(200).send("status deleted....");
};

module.exports = {
  addBookRequestStatus,
  getAllbookRequestStatus,
  getBookRequestStatusByID,
  updateBookRequestByID,
  deleteBookRequestStatusByID,
};
