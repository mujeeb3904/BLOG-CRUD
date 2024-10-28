const { title } = require("process");
const Blog = require("../model/blog");

// Get all Blogs
async function handleGetAllBlog(req, res) {
    try {
        const allBlogs = await Blog.find();
        if(!allBlogs ||[]){
            return res.status(404).json({message:"blog not found"});
        }
        return res.json(allBlogs);
    } catch (error) {
        console.error("Error fetching all blogs:", error);
        return res.status(500).json({ msg: "Error fetching blogs" });
    }
}
 // Post Blog
async function handleCreateBlog(req, res) {
    const { title, body, comments, likes } = req.body;

    // Check if required fields are provided
    if (!title || !body || !comments || !likes) {
        return res.status(400).json({ msg: "Enter all required fields: title, body, comments, likes" });
    }

    try {
        // Create a new blog instance
        const newBlog = new Blog({
            title,
            body,
            comments,
            likes
        });

        // Save the new blog to the database
        const savedBlog = await newBlog.save();

        // Return success response with the saved blog data
        return res.status(201).json({ message: "Blog created successfully", blog: savedBlog });
    } catch (error) {
        console.error("Error creating blog:", error);
        return res.status(500).json({ msg: "Error creating blog" });
    }
}

// Get Blog by ID
async function handleGetAllBlogById(req, res) {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        return res.json(blog);
    } catch (error) {
        console.error("Error fetching blog by ID:", error);
        return res.status(500).json({ error: "Error fetching blog" });
    }
}

// Delete Blog by ID
async function handleDeleteBlogById(req, res) {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        return res.status(200).json({ message: "Blog deleted successfully", blog });
    } catch (error) {
        console.error("Error deleting Blog by ID:", error);
        return res.status(500).json({ error: "Error deleting blog" });
    }
}

// Update Blog by ID
async function handleUpdateBlog(req, res) {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }
        return res.status(200).json({ message: "Blog updated successfully", blog });
    } catch (error) {
        console.error("Error updating Blog by ID:", error);
        return res.status(500).json({ error: "Error updating blog" });
    }
}

module.exports = {
    handleGetAllBlog,
    handleCreateBlog,
    handleGetAllBlogById,
    handleDeleteBlogById,
    handleUpdateBlog,
};
