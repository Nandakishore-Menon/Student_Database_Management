const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/studentdb');
mongoose.Promise = global.Promise;

// json
app.use(bodyParser.json());

// CORS fix
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// routes
app.use('/api', require('./api')); 

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('listening!');
});