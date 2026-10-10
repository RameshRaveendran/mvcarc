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

// Save users to the JSON file
const saveToDB = async (users) => {
  await fs.writeFile(
    DB_PATH,
    JSON.stringify(users, null, 2),
    "utf-8"
  );
};

// createUser 
const createUser = async (userData) => {

  const users = await getAllUsers();

  const newUser = {
    id: user.reduce((max, user) => Math.max(max, user.id), 0) + 1, ...userData
  }

  users.push(newUser);

  await saveToDB(users);

  return newUser
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};