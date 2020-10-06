const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

require('dotenv').config();
const PORT = process.env.PORT || 6000;

//view engine
app.set('view engine', 'ejs');

// set controllers
const ctrl = require('./controllers');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //what does this do?
app.use(morgan('tiny')); //what does morgan do?
app.use(methodOverride('_method')); // syntax in the string?

//home route
app.get('/', (req, res) => {
    console.log('hitting home route')
    res.send('home');
})

//404 route

app.listen(PORT, console.log(`listening on port ${PORT}`))
