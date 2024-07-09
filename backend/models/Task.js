const { Sequelize } = require("sequelize");

// init DataTypes
const { DataTypes } = Sequelize;

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("task", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN,
    createdAt: DataTypes.TIMESTAMP,
    finishedAt: DataTypes.TIMESTAMP,
    user_id: DataTypes.INTEGER,
  });

  // Associate Task with User
  Task.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });
}