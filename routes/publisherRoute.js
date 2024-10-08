const publisherController = require("../controllers/publisherController");

const router = require("express").Router();

router.post("/addpublisher", publisherController.addPublisher);

router.get("/getallpublisher", publisherController.getAllPublisher);

router.get("/:publisherID", publisherController.getSinglePublisher);

router.put("/:publisherID", publisherController.updatePublisher);

router.delete("/:publisherID", publisherController.deletePublisher);

module.exports = router;
