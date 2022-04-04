//external import
const express = require("express");

//internal import
const { getUser } = require("../controller/userController");
const titleRespose = require("../middleware/common/titleresponse");
const router = express.Router();

router.get("/", titleRespose("User"), getUser);

module.exports = router;
