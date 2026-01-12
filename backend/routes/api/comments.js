/**
 * Retrieves all comments from the database
 * @route GET /
 * @returns {Object} 200 - An array of comment objects
 * @returns {Object} 500 - Error object with message "Failed to fetch comments"
 * @throws {Error} Database connection or query errors
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});