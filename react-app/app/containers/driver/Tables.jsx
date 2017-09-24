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

import Waiting from 'app/components/driver/Waiting'

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

class Tables extends React.Component {

	render() {
		let waitingRide = [];
		let ongoingRide = [];
		let completedRide = [];
		this.props.data.map(function(data){
			if(data.status == 'WAITING'){
				waitingRide.push(data);
			}
			if(data.status == 'ONGOING'){
				ongoingRide.push(data);
			}
			if(data.status == 'COMPLETE'){
				completedRide.push(data);
			}
		});
		return (
			<div className={css(Style.Parent)}>
				<Waiting
					data={waitingRide}
				/>
			</div>
		);
	}
}

export default Tables;
