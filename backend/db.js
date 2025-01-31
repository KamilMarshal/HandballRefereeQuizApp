const { Pool } = require('pg');
const {toString} = require("express");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: String(process.env.DB_NAME),
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};