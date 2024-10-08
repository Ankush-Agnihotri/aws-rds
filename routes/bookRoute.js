const bookController = require("../controllers/bookController");

const router = require("express").Router();

router.post("/addbook", bookController.addBook);

router.get("/getallbook", bookController.getAllBook);

router.get("/:bookID", bookController.getSingleBook);

router.put("/:bookID", bookController.updateBook);

router.delete("/:bookID", bookController.deleteBook);

router.get("/category/:categoryID", bookController.getBooksByCategory);

module.exports = router;
