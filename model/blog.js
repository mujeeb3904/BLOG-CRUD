const mongoose = require("mongoose");

// Define schema structure
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
    },
    comments: {
        type: String,
    },
    likes: {
        type: Number,
    },
}, { timestamps: true }); 

// Creating model 
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
