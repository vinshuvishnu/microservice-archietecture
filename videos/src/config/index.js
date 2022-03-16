const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "MS",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "123456",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5433,
    database: process.env.DB_DATABASE || "MS",
    dialectOptions: {
      ssl: process.env.DB_SSL == "true",
    },
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Video = require("../models/video_model")(sequelize, Sequelize);


module.exports = db;
