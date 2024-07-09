const { Sequelize, DataTypes } = require("sequelize");
//const { DataTypes } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory')
//const sequelize = require('../db')

module.exports = (Sequelize, DataTypes) => { 
  const Task = sequelize.define('Task', 
    {
      id: {
        type: DataTypes.number,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      finishedAt: {
        type: DataTypes.DATE
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id'
        }
      }
   
  }, {})
  return Task
}




