const bookRequestController = require("../controllers/bookRequestController");

const router = require("express").Router();

router.post("/addbookrequest", bookRequestController.addBookRequest);

router.get("/getallbookrequests", bookRequestController.getAllbookRequest);

router.get("/:requestID", bookRequestController.getBookRequestByID);

router.put("/:requestID", bookRequestController.updateBookRequestByID);

router.delete("/:requestID", bookRequestController.deleteBookRequestByID);

router.get(
  "/membersbyrequest/:requestID",
  bookRequestController.getMembersByRequestID
);

module.exports = router;
