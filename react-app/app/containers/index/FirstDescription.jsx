/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import ProgressiveImage from 'react-progressive-image'

import CoreStyle from 'app/config/core/style'
import Url from 'app/config/core/url'

const Style = StyleSheet.create({
	Parent : {
		[CoreStyle.PC.BREAKPOINT]:{
			display: '-webkit-inline-flex',
			display: '-ms-inline-flexbox',
			display: 'inline-flex',
			paddingTop: '4%',
			marginLeft: '7.5%',
			marginRight: 'auto',
			width: '85%',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			display: 'block',
			width: '100%',
			marginBottom: '0.5%',
			marginTop: '5px',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			display: 'block',
			width: '100%',
			marginBottom: '0.5%',
			marginTop: '5px',
		},
	}
})

class FirstDescription extends React.Component {

	render() {
		return (
			<div className={css(Style.Parent)}>
				Hi
			</div>
		);
	}
}

export default FirstDescription;
