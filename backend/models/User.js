import { Sequelize } from "sequelize";
import bdd from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define the User model
const User = bdd.define("user", {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
});

// Export the User model
export default User;