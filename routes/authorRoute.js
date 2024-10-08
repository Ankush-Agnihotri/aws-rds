const authorController = require("../controllers/authorController");

const router = require("express").Router();

router.post("/addauthor", authorController.addAuthor);

router.get("/getallauthors", authorController.getAllAuthor);

router.get("/:authorID", authorController.getSingleAuthor);

router.put("/:authorID", authorController.updateAuthor);

router.delete("/:authorID", authorController.deleteAuthor);

module.exports = router;
