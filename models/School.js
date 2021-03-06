const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    location: String,
    public: Boolean,
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }]
}, {timestamps: true});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
