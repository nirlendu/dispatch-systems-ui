/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import Helmet from 'react-helmet'

import Url from 'app/config/core/url'
import PanallyMetaTags from 'app/utils/meta-generator'

class Include extends React.Component {

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
				title={CoreTitle}
				meta={MetaTags}
			/>
		);
	}
}

export default Include;
