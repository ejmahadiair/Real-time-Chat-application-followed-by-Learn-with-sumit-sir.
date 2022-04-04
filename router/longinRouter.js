//external imports
const express = require("express");

//internal imports
const { getLogin } = require("../controller/loginController");
const titleRespose = require("../middleware/common/titleresponse");
const router = express.Router();

router.get("/", titleRespose("Login"), getLogin);

module.exports = router;
