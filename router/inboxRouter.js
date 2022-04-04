//external imports
const express = require("express");

//internal imports
const { getInbox } = require("../controller/inboxController");
const titleRespose = require("../middleware/common/titleresponse");
const router = express.Router();

router.get("/", titleRespose("Inbox"), getInbox);

module.exports = router;
