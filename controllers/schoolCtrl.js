const express = require('express');
const router = express.Router();
const db = require('../models');

// current path assumes '/schools'?

router.get('/', (req, res) => {
    db.School.find({}, (error, schools) => {
        error ? console.log(error) : res.render('schools/index', {schools})
    })
})

router.get('/new', (req, res) => {
    res.render('schools/new')
})

router.post('/', (req, res) => {
    console.log('hitting add school')
    db.School.create(req.body, (error, newSchool) => {
        error ? console.log(error) : res.redirect(`/schools/${newSchool.id}`)
    })
})

router.get('/:school', (req, res) => {
    db.School.findById(req.params.school, (error, school) => {
        const context = {
            school: school.school,
            location: school.location,
            public: !!school.public,
            id: school.id
        }
        error ? console.log(error) : res.render('schools/show', context)
    })
})

router.delete('/:school', (req, res) => {
    console.log('hitting delete')
    db.School.findByIdAndDelete(req.params.school, (error, school) => {
        error ? console.log(error) : res.redirect('/schools');
    })
})

router.get('/:school/edit', (req, res) => {
    db.School.findById(req.params.school, (error, school) => {
        const context = {
            school: school.school,
            location: school.location,
            public: !!school.public,
            id: school.id
        }
        error ? console.log(error) : res.render('schools/show', context)
    })
})

router.put('/:school', (req, res) => {
    console.log('hitting hitting update')
    db.School.findByIdAndUpdate(req.params.school,
        req.body,
        {new: true},
        (error, school) => {
        error ? console.log(error) : res.redirect(`/articles/${school._id}`)
    })
})
module.exports = router;
