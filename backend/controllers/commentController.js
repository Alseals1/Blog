const { Comment, User } = require("../database/models");

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
    console.log("Comments <=======> HERE");
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comment" });
  }
};

exports.createComment = async (req, res) => {
  try {
    const { postId, userId, content, anonymous } = req.body;
    const newComment = await Comment.create({
      postId,
      userId: anonymous ? null : userId,
      content,
      anonymous,
    });
    res.status(201).json(newComment);
  } catch (error) {
    console.error("COMMENT ERROR:", error);
    res.status(500).json({ error: "Failed to create comment" });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { content } = req.body;
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    comment.content = content;
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to update comment" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    await comment.destroy();
    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
};

exports.getCommentsByPostId = async (req, res) => {
  console.log("Fetching comments for postId:", req.params.postId);
  try {
    const comments = await Comment.findAll({
      where: { postId: req.params.postId },
      include: [
        {
          model: User,
          attributes: ["id", "name"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.json(comments);
  } catch (error) {
    console.error("FETCH COMMENTS ERROR:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};
