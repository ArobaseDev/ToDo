import { Sequelize } from "sequelize";

// class for defining the User model
export class User {
  static init(sequelize: Sequelize) {
    return sequelize.define("User", typeof Sequelize.addHook{
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