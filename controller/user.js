const User = require("../model/user");

// GET /api/users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error reading users"
    });
  }
};


module.exports = { getAllUsers };