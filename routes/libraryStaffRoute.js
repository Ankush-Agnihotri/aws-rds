const libraryStaffController = require("../controllers/libraryStaffController");

const router = require("express").Router();

router.post("/addstaff", libraryStaffController.addLibraryStaff);

router.get("/getallstaff", libraryStaffController.getAlllibrarystaffDetails);

router.get("/:issuedByID", libraryStaffController.getlibrarystaffDetailByID);

router.put("/:issuedByID", libraryStaffController.updatelibrarystaffDetailByID);

router.delete(
  "/:issuedByID",
  libraryStaffController.deletelibrarystaffDetailByID
);

module.exports = router;
