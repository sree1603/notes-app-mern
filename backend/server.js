const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Init app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Routes
const noteRoutes = require('./routes/noteRoutes');
app.use('/api/notes', noteRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
