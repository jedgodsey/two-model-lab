const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

require('dotenv').config();
const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`listening on port ${PORT}`))
