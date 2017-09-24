
/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {fullBlack} from 'material-ui/styles/colors'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default getMuiTheme({
	fontFamily: 'Lusitana, sans-serif',
	palette: {
		textColor: fullBlack,
	},
	userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36',
});