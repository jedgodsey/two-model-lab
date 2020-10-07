const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    sport: {
        type: String,
        required: true
    },
    genders: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Team = mongoose.model('Team', teamSchema); // what's the first parameter?

module.exports = Team;
