const { Sequelize } = require("sequelize");

// Create connection to SQLite database
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// export the sequelize instance
module.exports = sequelize;