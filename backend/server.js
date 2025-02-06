require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const ruleRoutes = require("./routes/ruleRoutes");
const os = require("os");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Podpinamy nasze trasy
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/rule", ruleRoutes);

// Synchronizacja bazy danych
sequelize.sync().then(() => {
  console.log("✅ Połączono z bazą PostgreSQL");
});

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "127.0.0.1";
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serwer działa na http://${getLocalIP()}:${PORT}`));
