const db = require("../models");
const Book = db.Book;

//add book
const addBook = async (req, res) => {
  let data = {
    bookID: req.body.bookID,
    ISBNCode: req.body.ISBNCode,
    bookTitle: req.body.bookTitle,
    publicationYear: req.body.publicationYear,
    bookEdition: req.body.bookEdition,
    copiesTotal: req.body.copiesTotal,
    copiesAvailable: req.body.copiesAvailable,
    categoryID: req.body.categoryID,
    publisherID: req.body.publisherID,
    locationID: req.body.locationID,
  };

  const book = await Book.create(data);
  res.status(200).send(book);
  console.log(book);
};

//get all books
const getAllBook = async (req, res) => {
  const {
    page = 0,
    size = 3,
    sortby = "publicationYear",
    sortorder = "ASC",
    publisherID,
    categoryID,
  } = req.query;
  const where = {};
  if (categoryID) where.categoryID = categoryID;
  if (publisherID) where.publisherID = publisherID;

  const book = await Book.findAndCountAll({
    //replace findall by findand countall
    where: where,
    limit: size,
    offset: page * size,
    order: [[sortby, sortorder]],
  });
  res.status(200).send(book);
  console.log(book);
};

//get single student

const getSingleBook = async (req, res) => {
  let bookID = req.params.bookID;
  const book = await Book.findOne({
    where: { bookID: bookID },
  });
  res.status(200).send(book);
  console.log(book);
};

//update book
const updateBook = async (req, res) => {
  let bookID = req.params.bookID;
  const book = await Book.update(req.body, {
    where: { bookID: bookID },
  });
  res.status(200).send(book);
  console.log(book);
};

//delete book

const deleteBook = async (req, res) => {
  let bookID = req.params.bookID;
  const book = await Book.destroy({
    where: { bookID: bookID },
  });
  res.status(200).send(book);
};

//get all the details of books on the basis of categoryid

const getBooksByCategory = async (req, res) => {
  let categoryID = req.params.categoryID;
  const book = await Book.findAll({
    include: [
      {
        model: db.Category,
      },
      {
        model: db.Publisher,
      },
      {
        model: db.Location,
      },
    ],
    where: { categoryID: categoryID },
  });
  res.status(200).send(book);
};

//get book details by filtering method

module.exports = {
  addBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,
  getBooksByCategory,
};
