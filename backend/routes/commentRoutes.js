const express = require("express");
const router = express.Router();

// Add a comment to a post
router.post("/:postId", (req, res) => {
  res.send(`Add comment to post ${req.params.postId}`);
});

// Get all comments for a post
router.get("/:postId", (req, res) => {
  res.send(`Get all comments for post ${req.params.postId}`);
});

module.exports = router;
