const locationController = require("../controllers/locationController");

const router = require("express").Router();

router.post("/addlocation", locationController.addLocation);

router.get("/getalllocation", locationController.getAllLocation);

router.get("/:locationID", locationController.getSingleLocation);

router.put("/:locationID", locationController.updateLocation);

router.delete("/:locationID", locationController.deleteLocation);

module.exports = router;
