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
    res.render('teams/new')
})

router.post('/', (req, res) => {
    db.Team.create(req.body, (error, newTeam) => {
        error ? console.log(error) : res.redirect(`schools/${newTeam.id}`)
    })
})

router.get('/:team', (req, res) => {
    db.Team.findById(req.params.team, (error, team) => {
        const context = {
            sport: team.sport,
            sexCode: team.sexCode,
            id: team.id
        }
        error ? console.log(error) : res.render('teams/show', context)
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
            sexCode: team.sexCode,
            id: team.id
        }
        error ? console.log(error) : res.render('edit', context);
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
