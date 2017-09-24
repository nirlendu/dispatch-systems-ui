/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import moment from 'moment'

import CoreStyle from  'app/config/core/style'


const Style = StyleSheet.create({
	Wrapper : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '85%',
			color: [CoreStyle.COLOR.GREY],
			margin: '5% auto'
		},
		[CoreStyle.TAB.BREAKPOINT]:{
		},
		[CoreStyle.MOB.BREAKPOINT]:{
		},
	},
})

export default class Dashboard extends React.Component {
	render() {
		const entries = this.props.data.map(function(data) {
			let requestAgo = moment(data.requestTime).fromNow();
			return(
				<tr key={data.rideId}>
					<td>{data.rideId}</td>
					<td>{data.customerId}</td>
					<td>{requestAgo}</td>
					<td>{data.status}</td>
					<td>{data.driverId}</td>
				</tr>
			)
		})
		return (
			<div className={css(Style.Wrapper)}>
				<table cellSpacing="20">
					<tr>
						<th>Ride ID</th>
						<th>Customer ID</th> 
						<th>Time Elapsed</th>
						<th>Status</th>
						<th>Driver ID</th>
					</tr>
					{entries}
				</table>
			</div>
		)
	}
}
