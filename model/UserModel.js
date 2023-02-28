import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          args: true,
          msg: "Please enter username",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          args: true,
          msg: "Please enter password",
        },
      },
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    token: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
