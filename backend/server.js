require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Podpinamy nasze trasy
app.use("/api/auth", authRoutes);

// Synchronizacja bazy danych
sequelize.sync().then(() => {
  console.log("✅ Połączono z bazą PostgreSQL");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serwer działa na http://localhost:${PORT}`));
