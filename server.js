const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

require('dotenv').config();
const PORT = process.env.PORT || 3001;

//view engine
app.set('view engine', 'ejs');

// set controllers
const schoolCtrl = require('./controllers/schoolCtrl');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //what does this do?
app.use(morgan('tiny')); //what does morgan do?
app.use(methodOverride('_method')); // syntax in the string?

//home route
app.get('/', (req, res) => {
    res.render('home');
})

// app.use('/teams', ctrl.teams);
app.use('/schools', schoolCtrl);

//404 route
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
