var express = require('express');
var router = express.Router();
var User = require('../models/user'); 
var mongoose = require('mongoose');

// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACf3f47245558bab8ef0ad24f5f4c464d0';
var authToken = "f5e95817975c0d7d9635ca0e14058113";
var client = require('twilio')(accountSid, authToken);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET band search form */
router.get('/bandSearchForm', function(req, res, next){
	res.render('bandSearchForm', {title: 'Band Search'});
});

/* GET time search form */
router.get('/timeSearchForm', function(req, res, next){
	res.render('timeSearchForm', {title: 'Time Search'});
});

/* GET firefox time search form */
router.get('/firefoxTimeSearch', function(req, res, next){
	var month = [["January","01"],["February","02"],["March","03"],["April","04"],["May","05"],["June","06"],["July","07"],["August","08"],["September","09"],["October","10"],["November","11"],["December","12"]];
	var year = ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
	res.render('firefoxTimeSearch', {title: 'Firefox Time Search', month:month,year:year});
});

module.exports = router;
