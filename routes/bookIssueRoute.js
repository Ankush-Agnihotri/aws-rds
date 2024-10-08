const bookIssueController = require("../controllers/bookIssueController");

const router = require("express").Router();

router.get("/addbookissue/:issueID", bookIssueController.addBookIsuueDetails);

router.get("/getallbookrequests", bookIssueController.getAllbookIssueDetails);

router.get("/:requestID", bookIssueController.getBookIssueDetailByID);

router.put("/:requestID", bookIssueController.updateBookIssueDetailByID);

router.delete("/:requestID", bookIssueController.deleteBookIssueDetailByID);

router.get("/newdata/:issuedByID", bookIssueController.getCombinedData);

module.exports = router;
