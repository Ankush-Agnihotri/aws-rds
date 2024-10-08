const memberstatusController = require("../controllers/memberStatusController");
const router = require("express").Router();

router.post("/addmemberstatus", memberstatusController.addMemberStatus);

router.get("/getallmembersstatus", memberstatusController.getAllMemberStatus);

router.get("/:memberID", memberstatusController.getMemberStatusByID);

router.put("/:memberID", memberstatusController.updateMemberStatusByID);

router.delete("/:memberID", memberstatusController.deleteMemberStatusByID);

module.exports = router;
