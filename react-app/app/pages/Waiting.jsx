/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import CoreStyle from 'app/config/core/style'
import Url from 'app/config/core/url'

const Style = StyleSheet.create({
	Wrapper : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '7%',
			margin:'auto',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			width: '7%',
			margin:'auto',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			width: '20%',
			margin:'auto',
		},
	},
	Gif : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '100%',
			height: '100%',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			width: '100%',
			height: '100%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			width: '100%',
			height: '100%',
		},
	},
	Text: {
		[CoreStyle.PC.BREAKPOINT]:{
			padding: '3% 0px',
			textAlign: 'center',
			color: [CoreStyle.COLOR.GREY],
			fontSize: '25px',
			fontWeight: 'bold',
			height: '100%',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			padding: '2% 0px',
			textAlign: 'center',
			color: [CoreStyle.COLOR.GREY],
			fontSize: '25px',
			fontWeight: 'bold',
			height: '100%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			paddingTop: '10%',
			paddingBottom: '5%',
			textAlign: 'center',
			color: [CoreStyle.COLOR.GREY],
			fontSize: '20px',
			fontWeight: 'bold',
			height: '100%',
		},
	},
})

class Waiting extends React.Component {
	render() {
		const GIF = Url.Static.Media + 'waiting/ripple.gif';
		return (
			<div>
				<div className={css(Style.Text)}> 
					Finding best things. For you.
				</div>
				<div className={css(Style.Wrapper)}>
					<img className={css(Style.Gif)} src={GIF} alt='gif'/>
				</div>
			</div>
		);
	}
}

module.exports = Waiting;
