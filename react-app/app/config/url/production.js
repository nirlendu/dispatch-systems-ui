/**
 * Copyright - Panally Internet
 */

var Enum = require('enum');

var ConstUrlsProduction = {
	'Font' : 'https://fonts.googleapis.com/css?family=Lusitana',
	'Api' : 'https://api.panally.com/v1/',
	'Static': {
		'Host': 'https://assets.panally.com',
		'Font': 'https://assets.panally.com/static/fonts/',
		'Media': 'https://assets.panally.com/static/img/',
		'Css': 'https://assets.panally.com/static/css/',
		'Js': 'https://assets.panally.com/static/js/',
		'App': {
			'Endpoint': 'https://assets.panally.com/static/img/app/',
			'PlaceholderImage450x300' : 'https://assets.panally.com/static/img/app/placeholder/placeholder.jpg',
			'PlaceholderImage540x350' : 'https://assets.panally.com/static/img/app/placeholder/placeholder-2.jpg',
			'PlaceholderImage600x300' : 'https://assets.panally.com/static/img/app/placeholder/placeholder-3.jpg'
		}
	},
	'Search' : 'https://panally.com/search?',
	'Listing' : {
		'Journeys' : 'https://panally.com/listing/journeys'
	},
	'Business' : 'https://panally.com/b/',
	'Fetch': {
		'Index': 'https://panally.com/api/index',
		'Listing': {
			'Journeys': 'https://panally.com/api/listing/journeys'
		},
		'Business': {
			'Index': 'https://panally.com/api/business/',
		},
		'Campaign': {
			'Index': 'https://panally.com/api/campaign/',
		}
	},
	'CORS' : 'https://cors-anywhere.herokuapp.com/'
}

module.exports = new Enum(ConstUrlsProduction).toJSON();