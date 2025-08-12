// Import required modules
const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');

// Load environment variables from .env file
// dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors(
    {
        origin: '*', // Allow all origins, adjust as needed for security
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
    }
)); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Define the port
const PORT = process.env.PORT || 3000;