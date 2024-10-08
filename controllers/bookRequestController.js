const db = require("../models");
const bookRequest = db.bookRequest;

//add bookrequest
const addBookRequest = async (req, res) => {
  let data = {
    requestID: req.body.requestID,
    bookID: req.body.bookID,
    memberID: req.body.memberID,
    requestDate: req.body.requestDate,
    availableStatusID: req.body.availableStatusID,
  };

  const bookrequest = await bookRequest.create(data);
  res.status(200).send(bookrequest);
  console.log(bookrequest);
};

//get all bookrequest

const getAllbookRequest = async (req, res) => {
  const bookrequest = await bookRequest.findAll();
  res.status(200).send(bookrequest);
  console.log(bookrequest);
};

//get bookrequest by id

const getBookRequestByID = async (req, res) => {
  let requestID = req.params.requestID;
  const bookrequest = await bookRequest.findOne({
    where: { requestID: requestID },
  });
  res.status(200).send(bookrequest);
  console.log(bookrequest);
};

//update book request by id

const updateBookRequestByID = async (req, res) => {
  let requestID = req.params.requestID;
  const bookrequest = await bookRequest.update(req.body, {
    where: { requestID: requestID },
  });
  res.status(200).send(bookrequest);
  console.log(bookrequest);
};

//delete bookrequest by id
const deleteBookRequestByID = async (req, res) => {
  let requestID = req.params.requestID;
  const bookrequest = await bookRequest.destroy({
    where: { requestID: requestID },
  });
  res.status(200).send("Request deleted....");
};

//get  book requests status and members detail by request id
const getMembersByRequestID = async (req, res) => {
  let requestID = req.params.requestID;
  const findMembersByRequestID = await bookRequest.findAll({
    include: [
      {
        model: db.bookRequestStatus,
      },
      {
        model: db.Member,
      },
    ],
    where: { requestID: requestID },
  });
  res.status(200).send(findMembersByRequestID);
};

module.exports = {
  addBookRequest,
  getAllbookRequest,
  getBookRequestByID,
  updateBookRequestByID,
  deleteBookRequestByID,
  getMembersByRequestID,
};
