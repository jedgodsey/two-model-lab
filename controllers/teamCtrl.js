const express = require('express');
const router = express.Router();
const db = require('../models');

// current path assumes '/teams'

router.get('/', (req, res) => {
    db.Team.find({}, (error, teams) => {
        error ? console.log(error) : res.render('teams/index', {teams})
    })
})

router.get('/new', (req, res) => {
    db.School.find({}, (err, allSchools) => {
        const context = {
            schools: allSchools
        }
        err ? console.log(err) : res.render('teams/new', context);
    })
})

router.post('/', (req, res) => {
    db.Team.create(req.body, (error, newTeam) => {
        if (error) console.log(error);
        db.School.findById(req.body.school, (err, foundSchool) => {
            if (err) console.log(err);
            foundSchool.teams.push(newTeam._id);
            foundSchool.save((err, savedSchool) => {
                err ? console.log(err) : res.redirect(`/teams/${newTeam._id}`)
            })
        })
    })
})

router.get('/:team', (req, res) => {
    db.Team.findById(req.params.team)
    .populate('school')
    .exec((error, team) => {
        error ? console.log(error) : res.render('teams/show', team)
    })
})

router.delete('/:team', (req, res) => {
    db.Team.findByIdAndDelete(req.params.team, (error, team) => {
        error ? console.log(error) : res.redirect('/teams');
    })
})

router.get('/:team/edit', (req, res) => {
    db.Team.findById(req.params.team, (error, team) => {
        const context = {
            sport: team.sport,
            genders: team.genders,
            id: team.id
        }
        error ? console.log(error) : res.render('teams/edit', context);
    })
})

router.put('/:team', (req, res) => {
    db.Team.findByIdAndUpdate(req.params.team,
        req.body,
        {new: true},
        (error, team) => {
            error ? console.log(error) : res.redirect(`/teams/${team._id}`)
    })
})

module.exports = router;
