const { data } = require("react-router-dom");
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

// GET /api/user/id
const getUserById = async (req, res) => {

    try {
        const id = Number(req.params.id);
        console.log("requestd id is",id)
        if(!Number.isInteger(id) || id < 1){
            return res.status(400).json({
                success: false,
                message: "Invalid user ID"
            });
        }
        
        const users = await User.getUserById(id);


        if(!users){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error finding the Useroo"
        });
    }
};

// POST /api/users
const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      !Number.isFinite(age) ||
      age < 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid name, email and age are required"
      });
    }

    const newUser = await User.createUser({
      name: name.trim(),
      email: email.trim(),
      age
    });

    res.status(201).json({
      success: true,
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating user"
    });
  }
};



module.exports = { 
    getAllUsers,
    getUserById,
    createUser
};