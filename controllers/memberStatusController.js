const db = require("../models");
const memberStatus = db.memberStatus;

//add member status
const addMemberStatus = async (req, res) => {
  let data = {
    activeStatusID: req.body.activeStatusID,
    accountType: req.body.accountType,
    accountStatus: req.body.accountStatus,
    membershipStartDate: req.body.membershipStartDate,
    membershipEndDate: req.body.membershipEndDate,
  };

  const memberstatus = await memberStatus.create(data);
  res.status(200).send(memberstatus);
  console.log(memberstatus);
};

//get all members status

const getAllMemberStatus = async (req, res) => {
  const memberstatus = await memberStatus.findAll();
  res.status(200).send(memberstatus);
  console.log(memberstatus);
};

// get member status by id
const getMemberStatusByID = async (req, res) => {
  let activeStatusID = req.params.activeStatusID;
  const memberstatus = await memberStatus.findOne({
    where: { activeStatusID: activeStatusID },
  });
  res.status(200).send(memberstatus);
  console.log(memberstatus);
};

//update member status by id
const updateMemberStatusByID = async (req, res) => {
  let activeStatusID = req.params.activeStatusID;
  const memberstatus = await memberStatus.update(req.body, {
    where: { activeStatusID: activeStatusID },
  });
  res.status(200).send(memberstatus);
  console.log(memberstatus);
};

//delete member status bu id
const deleteMemberStatusByID = async (req, res) => {
  let activeStatusID = req.params.activeStatusID;
  const memberstatus = await memberStatus.destroy({
    where: { activeStatusID: activeStatusID },
  });
  res.status(200).send(memberstatus);
  console.log(memberstatus);
};

module.exports = {
  addMemberStatus,
  getAllMemberStatus,
  getMemberStatusByID,
  updateMemberStatusByID,
  deleteMemberStatusByID,
};
