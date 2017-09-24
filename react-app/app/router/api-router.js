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

router.get('/api/index', function(req, res) { 
	const IndexFile = path.join('schema/index.json');  
	fs.readFile(IndexFile, function(err, data) {
		if (err) {
			console.error(err);
			res.json({});
			res.end();
		}else{
			res.json(JSON.parse(data));
		}
	});
});

if (process.env.LOCAL == 'true'){
	module.exports = require('app/router/local-router');
} else {
	module.exports = router;
}
