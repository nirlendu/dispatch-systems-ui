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
import Ongoing from 'app/components/driver/Ongoing'
import Complete from 'app/components/driver/Complete'

const Style = StyleSheet.create({
	Parent : {
		[CoreStyle.PC.BREAKPOINT]:{
			display: '-webkit-inline-flex',
			display: '-ms-inline-flexbox',
			display: 'inline-flex',
			marginLeft: '7.5%',
			marginRight: 'auto',
			width: '85%',
		},
		[CoreStyle.TAB.BREAKPOINT]:{
		},
		[CoreStyle.MOB.BREAKPOINT]:{
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
				<Ongoing
					data={ongoingRide}
				/>
				<Complete
					data={completedRide}
				/>
			</div>
		);
	}
}

export default Tables;
