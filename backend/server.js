require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/models");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

//// Import and use routes
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

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
