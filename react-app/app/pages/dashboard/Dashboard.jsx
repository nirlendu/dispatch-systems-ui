/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import CoreStyle from  'app/config/core/style'

import Tables from 'app/containers/dashboard/Tables'

const Style = StyleSheet.create({
	Wrapper : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '85%',
			margin: '5% auto',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
			width: '100%',
			paddingBottom: '15%',
		},
		[CoreStyle.MOB.BREAKPOINT]:{
			width: '100%',
			paddingBottom: '15%',
		},
	},
})

export default class Dashboard extends React.Component {
	render() {
		let onSubmit = function(){
			window.location.reload();
		};
		return (
			<div className={css(Style.Wrapper)}>
				<div>
					<button onClick={onSubmit}>Refresh</button>
				</div>
				<Tables
					data={this.props.data}
				/>
			</div>
		)
	}
}
