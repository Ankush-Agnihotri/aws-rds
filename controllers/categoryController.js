const db = require("../models");
const Category = db.Category;

//add category
const addCategory = async (req, res) => {
  let data = {
    categoryID: req.body.categoryID,
    categoryName: req.body.categoryName,
  };

  const category = await Category.create(data);
  res.status(200).send(category);
  console.log(category);
};

//get all  categories
const getAllCategory = async (req, res) => {
  const category = await Category.findAll();
  res.status(200).send(category);
  console.log(category);
};

//get single student

const getSingleCategory = async (req, res) => {
  let categoryID = req.params.categoryID;
  const category = await Category.findOne({
    where: { categoryID: categoryID },
  });
  res.status(200).send(category);
  console.log(category);
};

//update category
const updateCategory = async (req, res) => {
  let categoryID = req.params.categoryID;
  const category = await Category.update(req.body, {
    where: { categoryID: categoryID },
  });
  res.status(200).send(category);
  console.log(category);
};

//delete Category

const deleteCategory = async (req, res) => {
  let categoryID = req.params.categoryID;
  const category = await Category.destroy({
    where: { categoryID: categoryID },
  });
  res.status(200).send("This category has been deleted....");
};

module.exports = {
  addCategory,
  getAllCategory,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
