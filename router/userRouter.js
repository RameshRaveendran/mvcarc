const express = require("express");
const router = express.Router();

// get the module
const { getAllUsers } = require("../controller/user");



// read all users
router.get("/",getAllUsers);


module.exports = router;