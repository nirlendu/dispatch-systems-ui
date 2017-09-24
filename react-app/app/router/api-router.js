/**
 * Copyright - Panally Internet
 */


/******************
 *
 *
 * Flow of the router config, () signifies next in the heirarchy
 * 
 * api-router --> (static-router) --> (place-rouer) --> (payment-router) --> (main-router)
 *
 *
 *******************/


// Imports
const express = require('express');
const fs = require('fs');    
const path = require('path');
const url = require('url');
const includes = require('lodash/includes');
const request = require('superagent');

const Url = require('app/config/core/url');

// Initializing the router
const router = express.Router();

router.get('/api/driver/:driverId', function(req, res) { 
	request
	.get(Url.Api + 'ride/driver/' + req.params.driverId)
	.end(function(error, response){
		res.json(response.body);
	})
});

router.get('/api/dashboard', function(req, res) { 
	request
	.get(Url.Api + 'ride/all')
	.end(function(error, response){
		res.json(response.body);
	})
});

router.post('/api/customer', function(req, res) {
	request
	.post(Url.Api + 'ride/new')
	.send(req.body)
	.end(function(error, response){
		res.send();
	})
});

router.get('/api/select/:rideId/:driverId', function(req, res) {
	request
	.get(Url.Api + 'ride/accept/' + req.params.rideId + '/' +req.params.driverId)
	.end(function(error, response){
		res.send(response.body);
	})
});

if (process.env.LOCAL == 'true'){
	module.exports = require('app/router/local-router');
} else {
	module.exports = router;
}
