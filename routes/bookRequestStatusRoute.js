const bookRequestStatusController = require("../controllers/bookRequestStatusController");

const router = require("express").Router();

router.post(
  "/addbookrequeststatus",
  bookRequestStatusController.addBookRequestStatus
);

router.get(
  "/getallbookrequestsstatus",
  bookRequestStatusController.getAllbookRequestStatus
);

router.get(
  "/:availableStatusID",
  bookRequestStatusController.getBookRequestStatusByID
);

router.put(
  "/:availableStatusID",
  bookRequestStatusController.updateBookRequestByID
);

router.delete(
  "/:availableStatusID",
  bookRequestStatusController.deleteBookRequestStatusByID
);

module.exports = router;
