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

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: String(process.env.DB_PASSWORD),
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   database: String(process.env.DB_NAME),
// });
//
// module.exports = {
//   query: (text, params) => pool.query(text, params)
// };