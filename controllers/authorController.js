const db = require("../models");
const Author = db.Author;

//add author
const addAuthor = async (req, res) => {
  let data = {
    authorID: req.body.authorID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  const author = await Author.create(data);
  res.status(200).send(author);
  console.log(author);
};

//get all authors

const getAllAuthor = async (req, res) => {
  let author = await Author.findAll();
  res.status(200).send(author);
  console.log(author);
};

//get author by id

const getSingleAuthor = async (req, res) => {
  let authorID = req.params.authorID;
  let author = await Author.findOne({ where: { authorID: authorID } });
  res.status(200).send(author);
  console.log(author);
};

//update authors
const updateAuthor = async (req, res) => {
  let authorID = req.params.authorID;
  let author = await Author.update({ where: { authorID: authorID } });
  res.status(200).send(author);
  console.log(author);
};

//delete author
const deleteAuthor = async (req, res) => {
  let authorID = req.params.authorID;
  let author = await Author.destroy({ where: { authorID: authorID } });
  res.status(200).send("The author has been deleted...");
};

module.exports = {
  addAuthor,
  getAllAuthor,
  getSingleAuthor,
  updateAuthor,
  deleteAuthor,
};
