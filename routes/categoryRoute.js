const categoryController = require("../controllers/categoryController");
//const db = require("../models");
const router = require("express").Router();

router.post("/addcategory", categoryController.addCategory);

router.get("/getallcategory", categoryController.getAllCategory);

router.get("/:categoryID", categoryController.getSingleCategory);

router.put("/:categoryID", categoryController.updateCategory);

router.delete("/:categoryID", categoryController.deleteCategory);

module.exports = router;
