const db = require("../models");
const bookAuthor = db.bookAuthor;

//add book author

const addBookAuthor = async (req, res) => {
  let data = {
    bookID: req.body.bookID,
    authorID: req.body.authorID,
  };

  const bookauthor = await bookAuthor.create(data);
  res.status(200).send(bookauthor);
  console.log(bookauthor);
};

//get all book author

const getAllBookAuthor = async (req, res) => {
  const bookauthor = bookAuthor.findAll();
  res.status(200).send(bookauthor);
  console.log(bookauthor);
};

//get single book author

const getSingleBookAuthor = async (req, res) => {
  let id = req.params.id;
  const bookauthor = bookAuthor.findOne({ where: { id: req.body.id } });
  res.status(200).send(bookauthor);
  console.log(bookauthor);
};

//update user

const updateBookAuthor = async (req, res) => {
  let id = req.params.id;
  const bookauthor = await bookAuthor.update(req.body, { where: { id: id } });
  res.status(200).send(bookauthor);
  console.log(bookauthor);
};

//delete author
const deleteBookAuthor = async (req, res) => {
  let id = req.params.id;
  const bookauthor = await bookAuthor.destroy({ where: { id: id } });
  res.status(200).send(bookauthor);
  console.log(bookauthor);
};

//get auhtor by book id

const getAuthorByBookID = async (req, res) => {
  let bookID = req.params.bookID;
  const bookauthor = await bookAuthor.findAll({
    include: [
      {
        model: db.Author,
      },
    ],
    where: { bookID: bookID },
  });
  res.status(200).send(bookauthor);
};

module.exports = {
  addBookAuthor,
  getAllBookAuthor,
  getSingleBookAuthor,
  updateBookAuthor,
  deleteBookAuthor,
  getAuthorByBookID,
};
