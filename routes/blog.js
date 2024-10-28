const express = require("express");

const {
    handleGetAllBlog,
    handleCreateBlog,
    handleGetAllBlogById,
    handleDeleteBlogById,
    handleUpdateBlog,
} = require("../controllers/blog");

const router = express.Router();

// Define routes
router.get("/", handleGetAllBlog);
router.post("/",  handleCreateBlog);
router.get("/:id", handleGetAllBlogById);
router.put("/:id", handleUpdateBlog);
router.delete("/:id", handleDeleteBlogById);

module.exports = router;
