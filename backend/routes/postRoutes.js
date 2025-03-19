const express = require("express");
const router = express.Router();

// Get all posts
router.get("/", (req, res) => {
  res.send("Get all posts endpoint");
});

// Get a specific post
router.get("/:id", (req, res) => {
  res.send(`Get post with ID: ${req.params.id}`);
});

// Update a post
router.put("/:id", (req, res) => {
  res.send(`Update post with ID: ${req.params.id}`);
});

// Delete a post
router.delete("/:id", (req, res) => {
  res.send(`Delete post with ID: ${req.params.id}`);
});

router.get("/:postId", (req, res) => {
  res.send(`Get all comments for post ${req.params.postId}`);
});

module.exports = router;
