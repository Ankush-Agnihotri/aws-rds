const { where } = require("sequelize");
const db = require("../models");
const bookIssue = db.bookIssue;

//add bookIssue
const addBookIsuueDetails = async (req, res) => {
  let data = {
    issueID: req.body.issueID,
    bookID: req.body.bookID,
    memberID: req.body.memberID,
    issueDate: req.body.issueDate,
    returnDate: req.body.returnDate,
    issueStatus: req.body.issueStatus,
    issuedByID: req.body.issuedByID,
  };

  const bookissue = await bookIssue.create(data);

  res.status(200).send({ messagge: "this route is running" });
  console.log(bookissue);
};

//get all bookIssue

const getAllbookIssueDetails = async (req, res) => {
  const bookissue = await bookIssue.findAll();
  res.status(200).send(bookissue);
  console.log(bookissue);
};

//get bookIssue by id

const getBookIssueDetailByID = async (req, res) => {
  let issueID = req.params.issueID;
  const bookissue = await bookIssue.findOne({
    where: { issueID: issueID },
  });
  res.status(200).send(bookissue);
  console.log(bookissue);
};

//update book request by id

const updateBookIssueDetailByID = async (req, res) => {
  let issueID = req.params.issueID;
  const bookissue = await bookIssue.update(req.body, {
    where: { issueID: issueID },
  });
  res.status(200).send(bookissue);
  console.log(bookissue);
};

//delete bookIssue by id
const deleteBookIssueDetailByID = async (req, res) => {
  let issueID = req.params.issueID;
  const bookissue = await bookIssue.destroy({
    where: { issueID: issueID },
  });
  res.status(200).send("Book issue details deleted....");
};

const getCombinedData = async (req, res) => {
  let issuedByID = req.params.issuedByID;
  const combineddata = await bookIssue.findAll({
    include: [
      {
        model: db.libraryStaff,
      },
    ],
    where: { issuedByID: issuedByID },
  });
  res.status(200).send(combineddata);
};

module.exports = {
  addBookIsuueDetails,
  getAllbookIssueDetails,
  getBookIssueDetailByID,
  updateBookIssueDetailByID,
  deleteBookIssueDetailByID,
  getCombinedData,
};
