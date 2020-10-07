const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    sport: {
        type: String,
        required: true
    },
    sexCode: {
        type: Number,
        $max: 3,
        $min: 1,
        required: true
    }
}, {timestamps: true});

const Team = mongoose.model('Team', teamSchema); // what's the first parameter?

module.exports = Team;
