const {toString} = require("express");
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Połącz z bazą PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  port: 5432,
  logging: false,
});

module.exports = sequelize;