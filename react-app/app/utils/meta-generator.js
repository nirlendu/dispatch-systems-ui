/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

const Url = require('app/config/core/url');
const HtmlTagsGenerator = require('app/utils/html-tags-generator');

export default function MetaGenerator(
	description,
	OGtitle,
	OGImage,
	OGdescription,
	OGurl,
	TwitterCard,
	TwitterTitle,
	TwitterDescription,
	TwitterImageSrc
){
	return HtmlTagsGenerator(
		description, 
		'Panally', 
		'Panally',
		'width=device-width, initial-scale=1.0',
		'#ff2c47',
		'euh14CFh_smG33v0vWDeImZgOvvZ4U3MlojQbXEyMHk', 
		OGtitle,
		'website',
		OGImage,
		OGdescription,
		OGurl,
		'#ffffff',
		Url.Static.App.Endpoint + 'favicon/ms-icon-144x144.png',
		TwitterCard,
		'@panallydotcom',
		TwitterTitle,
		TwitterDescription, 
		'@panallydotcom',
		TwitterImageSrc
	)
}
