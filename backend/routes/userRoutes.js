const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authmiddleware");

router.get("/", userController.getAllUsers);
router.get("/:id", authMiddleware, userController.getUserById);
// router.post("/", authenticateUser, userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", authMiddleware, userController.deleteUser);

// Auth routes
router.post("/register", authController.register);
router.post("/login", authController.login);
// router.get("/profile", authMiddleware, userController.getUserProfile);

module.exports = router;
