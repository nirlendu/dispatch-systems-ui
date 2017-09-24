/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */


var htmlTagsGenerator = function(
	description, 
	author, 
	applicationName,
	viewport = 'width=device-width, initial-scale=1.0',
	themeColor,
	GoogleSiteVerification = null, 
	OGtitle,
	OGtype = 'website',
	OGImage,
	OGdescription,
	OGurl,
	MSapplicationTileColor = '#ffffff',
	MSapplicationTileImage,
	TwitterCard,
	TwitterSite,
	TwitterTitle,
	TwitterDescription,
	TwitterCreator,
	TwitterImageSrc
){
	return (
		[
			{
				name: "google-site-verification", 
				content: GoogleSiteVerification
			},
			{
				name: "description", 
				content: description
			},
			{
				name: "author", 
				content: author
			},
			{
				name: "application-name", 
				content: applicationName
			},	
			{
				name: "og:title", 
				property:"og:title",
				content: OGtitle
			},
			{
				name: "og:type", 
				property:"og:type",
				content: OGtype
			},
			{
				name: "og:image", 
				property:"og:image",
				content: OGImage
			},
			{
				name: "og:description", 
				property:"og:description",
				content: OGdescription
			},
			{
				name: "og:url", 
				property:"og:url",
				content: OGurl
			},
			{
				name: "twitter:card", 
				content: TwitterCard
			},
			{
				name:"twitter:site", 
				content: TwitterSite
			},
			{
				name:"twitter:title", 
				content: TwitterTitle
			},
			{
				name:"twitter:description", 
				content: TwitterDescription
			},
			{
				name:"twitter:creator", 
				content: TwitterCreator
			},
			{
				name:"twitter:image:src", 
				content: TwitterImageSrc
			},
			{
				name: "viewport", 
				content: viewport
			},
			{
				name:"msapplication-TileColor", 
				content: MSapplicationTileColor
			},
			{
				name:"msapplication-TileImage", 
				content: MSapplicationTileImage
			},
			{
				name:"theme-color", 
				content: themeColor
			}
		]
	);
}

module.exports = htmlTagsGenerator;