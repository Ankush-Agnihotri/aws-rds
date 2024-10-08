const db = require("../models");
const Publisher = db.Publisher;

//add publisher
const addPublisher = async (req, res) => {
  let data = {
    publisherID: req.body.publisherID,
    publisherName: req.body.publisherName,
    publicationLanguage: req.body.publicationLanguage,
    publicationType: req.body.publicationType,
  };

  const publisher = await Publisher.create(data);
  res.status(200).send(publisher);
  console.log(publisher);
};

//get all  categories
const getAllPublisher = async (req, res) => {
  const publisher = await Publisher.findAll();
  res.status(200).send(publisher);
  console.log(publisher);
};

//get single student

const getSinglePublisher = async (req, res) => {
  let publisherID = req.params.publisherID;
  const publisher = await Publisher.findOne({
    where: { publisherID: publisherID },
  });
  res.status(200).send(publisher);
  console.log(publisher);
};

//update publisher
const updatePublisher = async (req, res) => {
  let publisherID = req.params.publisherID;
  const publisher = await Publisher.update(req.body, {
    where: { publisherID: publisherID },
  });
  res.status(200).send(publisher);
  console.log(publisher);
};

//delete publisher

const deletePublisher = async (req, res) => {
  let publisherID = req.params.publisherID;
  const publisher = await Publisher.destroy({
    where: { publisherID: publisherID },
  });
  res.status(200).send(publisher);
};

module.exports = {
  addPublisher,
  getAllPublisher,
  getSinglePublisher,
  updatePublisher,
  deletePublisher,
};
