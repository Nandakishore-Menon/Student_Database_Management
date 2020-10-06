const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/studentdb', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

// json
app.use(bodyParser.json());


app.use(express.static('public'));

// CORS fix
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, X-Requested-With');
    res.header('Access-Control-Allow-Methods', ' GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// routes
app.use('/api', require('./api'));

// error handling middleware
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 4000, function () {
    console.log('listening!');
});