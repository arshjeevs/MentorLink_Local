const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const mentorRoutes = require('./routes/mentors');
const menteeRoutes = require('./routes/mentees');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5000',    // Backend
    'http://localhost:5173',    // Vite frontend default
    'http://localhost:3000',    // Alternative frontend port
    'https://mentorlink-demo.onrender.com',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization'], // Added Authorization
  credentials: true  // Add this if you're using cookies/sessions
}));  // Enable CORS
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/mentees', menteeRoutes);

// MongoDB connection
mongoose.connect("mongodb+srv://admin:admin123@crudcluster.utqnq.mongodb.net/")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});