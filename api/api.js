const express = require('express');
const router = express.Router();
const Student = require('./student.js');

// all students
router.get('/', function(req, res, next){
    Student.find().then(function(student){
        console.log(student);
        res.send(student);
    }).catch(next);
});

// search by reg_id
router.get('/reg_id/:id', function(req, res, next){
    console.log("reg test");
    Student.find({reg_id: req.params.id}).then(function(student){
        res.send(student);
    });
});

// search by roll_no
router.get('/roll_no/:id', function(req, res, next){
    Student.find({roll_no: req.params.id}).then(function(student){
        res.send(student);
    });
});

// search by name
router.get('/name/:id', function(req, res, next){
    Student.find({name: req.params.id}).then(function(student){
        res.send(student);
    });
});

// search by class
router.get('/class/:id', function(req, res, next){
    Student.find({class: req.params.id}).then(function(student){
        res.send(student);
    });
});

// add student
router.post('/', function(req, res, next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
});

// update (search by reg_id; cannot update reg_id)
router.put('/reg_id/:id', function(req, res, next){
    Student.findOneAndUpdate({reg_id: req.params.id}, req.body).then(function(){
        Student.findOne({reg_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
});

// delete student (search by reg_id)
router.delete('/reg_id/:id', function(req, res, next){
    Student.findOneAndRemove({reg_id: req.params.id}).then(function(student){
        res.send(student);
    });
});


module.exports = router;