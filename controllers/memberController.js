const db = require("../models");
const Member = db.Member;

//add member
const addMember = async (req, res) => {
  let data = {
    memberID: req.body.memberID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    mobileNumber: req.body.mobileNumber,
    emailID: req.body.emailID,
    dateOfBirth: req.body.dateOfBirth,
    activeStatusID: req.body.activeStatusID,
  };

  const member = await Member.create(data);
  res.status(200).send(member);
  console.log(member);
};

//get all members

const getAllMember = async (req, res) => {
  const member = await Member.findAll();
  res.status(200).send(member);
  console.log(member);
};

//get member by id

const getMemberByID = async (req, res) => {
  let memberID = req.params.memberID;
  const member = await Member.findOne({ where: { memberID: memberID } });
  res.status(200).send(member);
  console.log(member);
};

//update member by id

const updateMemberByID = async (req, res) => {
  let memberID = req.params.memberID;
  const member = await Member.update(req.body, {
    where: { memberID: memberID },
  });
  res.status(200).send(member);
  console.log(member);
};

//delete member by id
const deleteMemberByID = async (req, res) => {
  let memberID = req.params.memberID;
  const member = await Member.destroy({ where: { memberID: memberID } });
  res.status(200).send("member deleted....");
};

//get members status by active status id
const getMemberByactiveStatusID = async (req, res) => {
  let activeStatusID = req.params.activeStatusID;
  const memberByStatus = await Member.findAll({
    include: [
      {
        model: db.memberStatus,
      },
      {
        model: db.bookRequest,
      },
    ],
    where: { activeStatusID: activeStatusID },
  });
  res.status(200).send(memberByStatus);
};

module.exports = {
  addMember,
  getAllMember,
  getMemberByID,
  updateMemberByID,
  deleteMemberByID,
  getMemberByactiveStatusID,
};
