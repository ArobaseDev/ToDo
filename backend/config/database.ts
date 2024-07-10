const { Sequelize } = require('sequelize');

// Passing a SQLite database file path
const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: 'path/to/your/database.db',
});

// Export the Sequelize instance
module.exports = sequelize;