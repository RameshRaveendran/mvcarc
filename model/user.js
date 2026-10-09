const fs = require("fs/promises");
const path = require("path");

const DB_PATH = path.join(__dirname, "database.json");

// Read all users
const getAllUsers = async () => {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
};

module.exports = { getAllUsers };