const express = require("express");
const router = express.Router();

// get the module
const { getAllUsers,
        getUserById
 } = require("../controller/user");



// read all users
router.get("/",getAllUsers);

// read a single user with id
router.get("/:id",getUserById);


module.exports = router;