var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Shifts = require('../models/shifts');
var Users = require('../models/user');

router.get('/shifts', function(req, res){
  Shifts.find({}).populate('volunteers').exec(function(err, shifts){
    if(!err){
      return res.send(shifts);
    } else {
      return res.send(500, err);
    }
  });
});

router.get('/users', function(req, res){
  Users.find(function(err, users){
    if(!err){
      return res.send(users);
    } else {
      return res.send(500, err);
    }
  });
});

router.post('/shifts/add', function(req, res){
  var shift = new Shifts({
    name: req.body.name,
    startsAt: new Date(req.body.startsAt),
    endsAt: new Date(req.body.endsAt),
    volunteers: req.body.volunteers
  });
  
  shift.save(function(err){
    if(!err){
      return res.status(200).send(shift);
    } else {
      return res.status(500).send(err);
    }
  });
});

module.exports = router;