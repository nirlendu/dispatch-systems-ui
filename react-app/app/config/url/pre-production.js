/**
 * Copyright - Panally Internet
 */

var Enum = require('enum');

var ConstUrlsPreProduction = {
	'Font' : 'https://fonts.googleapis.com/css?family=Lusitana',
	'Api' : 'https://prod-api.panally.com/v1/',
	'Static': {
		'Host': 'https://prod-assets.panally.com',
		'Font': 'https://prod-assets.panally.com/static/fonts/',
		'Media': 'https://prod-assets.panally.com/static/img/',
		'Css': 'https://prod-assets.panally.com/static/css/',
		'Js': 'https://prod-assets.panally.com/static/js/',
		'App': {
			'Endpoint': 'https://prod-assets.panally.com/static/img/app/',
			'PlaceholderImage450x300' : 'https://prod-assets.panally.com/static/img/app/placeholder/placeholder.jpg',
			'PlaceholderImage540x350' : 'https://prod-assets.panally.com/static/img/app/placeholder/placeholder-2.jpg',
			'PlaceholderImage600x300' : 'https://prod-assets.panally.com/static/img/app/placeholder/placeholder-3.jpg'
		}
	},
	'Search' : 'https://prod.panally.com/search?',
	'Listing' : {
		'Journeys' : 'https://prod.panally.com/listing/journeys'
	},
	'Business' : 'https://prod.panally.com/b/',
	'Fetch': {
		'Index': 'https://prod.panally.com/api/index',
		'Listing': {
			'Journeys': 'https://prod.panally.com/api/listing/journeys'
		},
		'Business': {
			'Index': 'https://prod.panally.com/api/business/',
		},
		'Campaign': {
			'Index': 'https://prod.panally.com/api/campaign/',
		}
	},
	'CORS' : 'https://cors-anywhere.herokuapp.com/'
}

module.exports = new Enum(ConstUrlsPreProduction).toJSON();