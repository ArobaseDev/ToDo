// Import Sequelize and SqliteDialect from sequelize-core
import { Sequelize } from "@sequelize/core";
import { SqliteDialect } from "@sequelize/sqlite3";

// Create connection to SQLite database
const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: "./database.sqlite",
});

// export the connection
export default sequelize;