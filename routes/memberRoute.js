const membercontroller = require("../controllers/memberController");
const router = require("express").Router();

router.post("/addmember", membercontroller.addMember);

router.get("/getallmembers", membercontroller.getAllMember);

router.get("/:memberID", membercontroller.getMemberByID);

router.put("/:memberID", membercontroller.updateMemberByID);

router.delete("/:memberID", membercontroller.deleteMemberByID);

router.get(
  "/membersstatus/:activeStatusID",
  membercontroller.getMemberByactiveStatusID
);

module.exports = router;
