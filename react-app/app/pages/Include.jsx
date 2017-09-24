/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import Helmet from 'react-helmet'

import CoreNavbarCss from './core-navbar-css'

import Url from 'app/config/core/url'
import PanallyMetaTags from 'app/utils/meta-generator'

export default class Include extends React.Component {
	
	render() {
		const CoreTitle = 'Test App';
		const CoreDescription = 'Test App';
		const CoreImage = '';
		const CoreUrl = '/';

		const Description = CoreDescription;
		const OgTitle = CoreTitle;
		const OgImage = CoreImage;
		const OgDescription = CoreDescription;
		const OgUrl = CoreUrl;
		const TwitterCard = CoreTitle;
		const TwitterTitle = CoreTitle;
		const TwitterDescription = CoreDescription;
		const TwitterImageSrc = CoreImage;

		const MetaTags = PanallyMetaTags (
			Description, 
			OgTitle,
			OgImage,
			OgDescription,
			OgUrl,
			TwitterCard,
			TwitterTitle,
			TwitterDescription,
			TwitterImageSrc
		);

		return (
			<Helmet
				htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
				title="Panally"
				titleAttributes={{itemprop: "name", lang: "en"}}
				meta={MetaTags}
				link={[
					{rel:"dns-prefetch", href: Url.Static.Host},
					{rel:"preload", href: "https://fonts.gstatic.com/s/lusitana/v4/h_1ZjHXv2tOhJGwbefP69nYhjbSpvc47ee6xR_80Hnw.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous"},
					{rel:"preload", href: Url.Static.App.PlaceholderImage450x300, as: "image"},
					{rel:"preload", href: Url.Static.App.PlaceholderImage540x350, as: "image"},
					{rel:"apple-touch-icon", sizes:"180x180", href: Url.Static.App.Endpoint + "favicon/apple-icon-180x180.png"},
					{rel:"icon", type:"image/png", sizes:"192x192",href: Url.Static.App.Endpoint + "favicon/android-icon-192x192.png"},
					{rel:"icon", sizes:"16x16", type:"image/png", href: Url.Static.App.Endpoint + "favicon/favicon-16x16.png"},
					{rel:"icon", sizes:"32x32", type:"image/png", href: Url.Static.App.Endpoint + "favicon/favicon-32x32.png"},
					{rel:"manifest", href:"/manifest.json"},
				]}
				script={[
					{type: "text/javascript", innerHTML: `				
					`}
				]}
				style={[
				  {
					type: "text/css", cssText: `
					/* latin */
					/* Font Settings */
					@font-face {
						font-family: 'Lusitana';
						font-style: normal;
						font-weight: 400;
						src: local('Lusitana'), url(https://fonts.gstatic.com/s/lusitana/v4/h_1ZjHXv2tOhJGwbefP69nYhjbSpvc47ee6xR_80Hnw.woff2) format('woff2');
						unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
					}
					/* General Universal Settings */
					body{
						margin: 0px;
						height: 100%;
						font-family: 'Lusitana', serif!important;
						font-weight: 400;
						line-height: 1.4;
						background-color: rgba(0,0,0,0);
					}
					/* Waiting Placeholder */
					@keyframes placeHolderShimmer{
						0%{
							background-position: -468px 0
						}
						100%{
							background-position: 468px 0
						}
					}
					`
					+ 
					CoreNavbarCss.toString()
				}
				]}
			/>
		);
	}
}
