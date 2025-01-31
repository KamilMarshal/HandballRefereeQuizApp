const express = require("express");
const cors = require("cors");
const db = require('./db');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const result = await db.query('select 1 as message');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log(`Serwer działa na http://localhost:${3000}`);
});