const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    category: { 
        type: String, 
        required: true,
        enum: ['iitjee', 'neet', 'boards', 'other'] 
    },
    submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);
