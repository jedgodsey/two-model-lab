const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    location: String,
    public: Boolean,
}, {timestamps: true});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
