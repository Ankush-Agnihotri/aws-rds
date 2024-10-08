const bookAuthorController = require("../controllers/bookAuthorController");
const router = require("express").Router();

router.post("/addbookauthor", bookAuthorController.addBookAuthor);

router.get("/getallbookauthor", bookAuthorController.getAllBookAuthor);

router.get("/getsinglebookauthor", bookAuthorController.getSingleBookAuthor);

router.put("/updatebookauthor", bookAuthorController.updateBookAuthor);

router.delete("/deletebookauthor", bookAuthorController.deleteBookAuthor);

router.get("/book/:bookID", bookAuthorController.getAuthorByBookID);

module.exports = router;
