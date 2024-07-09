const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
    
     {
      id: {
        type: DataTypes.number,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, 
    {
      timestamps: false,
    }, {})
  return User
}