const { Sequelize } = require("sequelize");
// import sequelize from "../config/database.js";
// import bdd from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });
}