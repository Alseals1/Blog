const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../database/models");
require("dotenv").config();

// Register a new user
exports.register = async (req, res) => {
  console.log("Register endpoint hit");
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("CREATE USER ERROR:", error);
    res.status(500).json({ error: "Registration failed" });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    // if (!name) return res.status(404).json({ error: "User not found" });

    res.json({
      user: {
        name: user.name,
      },
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
