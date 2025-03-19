require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

console.log("Routes loaded: /api/users, /api/posts, /api/comments");
// Start Server
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Test DB Connection
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});
