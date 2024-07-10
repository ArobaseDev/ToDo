import { Sequelize } from "sequelize";
import { database } from "../config/database";

// class for defining the User model
export class User {
  static init(sequelize: Sequelize) {
    return sequelize.define("User", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
    });
  }
}