const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 4000;

app.set('port', port);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json())

//Routes
app.use('/api/',require('./routes/Patient.routes'));
app.use('/api/',require('./routes/PatientTriaje.routes'));


module.exports = app;