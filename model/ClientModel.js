import { Sequelize } from "sequelize";
import db from "../config/db.js";

const { DataTypes } = Sequelize;

const Client = db.define(
  "client",
  {
    namaClient: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: {
          args: true,
          msg: "Please enter nama client",
        },
      },
    },
    clientId: {
      type: DataTypes.STRING,
    },
    clientSecret: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Client;

(async () => {
  await db.sync();
})();
