const { Sequelize } = require("sequelize");

// init DataTypes
const { DataTypes } = Sequelize;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  });
}