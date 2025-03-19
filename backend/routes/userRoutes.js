const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("User registered endpoint");
});

router.post("/login", (req, res) => {
  res.send("User login endpoint");
});

router.get("/profile", (req, res) => {
  res.send("User profile endpoint");
});

module.exports = router;
