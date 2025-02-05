const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;


// 📌 Rejestracja użytkownika
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);

    const { username, password, first_name, last_name, league_level } = req.body;

    // Sprawdź, czy użytkownik już istnieje
    let user = await User.findOne({ where: { username } });
    if (user) return res.status(400).json({ msg: "Użytkownik już istnieje" });

    // Haszowanie hasła
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      username,
      password_hash: hashedPassword,
      first_name,
      last_name,
      league_level,
    });

    res.json({ msg: "Rejestracja udana" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Błąd serwera" });
  }
});

// 📌 Logowanie użytkownika
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) return res.status(400).json({ msg: "Nieprawidłowe dane" });

    // Sprawdź hasło
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(400).json({ msg: "Nieprawidłowe dane" });

    // Tworzymy token JWT zawierający dane użytkownika
    const token = jwt.sign(
      { id: user.id, username: user.username, league_level: user.league_level },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Błąd serwera" });
  }
});

// 📌 Weryfikacja tokenu
router.post("/verify", (req, res) => {
  try {
    const token = req.body.token;
    if (!token) return res.status(401).json({ msg: "Brak tokenu" });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ msg: "Token nieważny" });
      res.json({ valid: true, user: decoded });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Błąd serwera" });
  }
});

module.exports = router;
