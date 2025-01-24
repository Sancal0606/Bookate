"use strict";

import fs from "fs";
import path from "path";
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
import config from "../config/config";
const db: any = {};

let sequelize: any;

if (env === "development")
  sequelize = new Sequelize(
    "ts-res",
    "root",
    "Sancal/1",
    {
      dialect: "mysql",
      host: "localhost",

    }
  );

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        );
    })
    .forEach((file) => {
        console.log("p2_" +file);
        const model = require(path.join(__dirname,file))(
            sequelize,
            Sequelize.DataTypes
        );
        console.log(model.name);
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
