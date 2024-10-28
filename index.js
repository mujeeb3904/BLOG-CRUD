const express = require("express");
const ConnectToMongoDB = require("./connect");
const blogRoutes = require("./routes/blog");

const app = express();
const port = 8002;

// Middleware to parse JSON
app.use(express.json());

// Database connection
ConnectToMongoDB("mongodb+srv://blog-crud:9503904mma@projects.wtj81.mongodb.net/?retryWrites=true&w=majority&appName=Projects")
    .then(() => {
        console.log("MongoDB Connected");
        
        // Start the server only after a successful DB connection
        app.listen(port, () => console.log(`Server started at Port: ${port}`));
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); 
    });

// Routes
app.use("/blog", blogRoutes);
