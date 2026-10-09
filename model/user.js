const fs = require("fs/promises");
const path = require("path");
const { stringify } = require("querystring");

const DB_PATH = path.join(__dirname, "database.json");

// Read all users
const getAllUsers = async () => {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
};

// Find one user by ID
const getUserById = async (id) => {
  const users = await getAllUsers();
  
  return users.find(
    (user) => Number(user._id) === Number(id)
  );
};

module.exports = {
  getAllUsers,
  getUserById
};