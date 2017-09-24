/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import CoreStyle from  'app/config/core/style'


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
		const entries = this.props.data.map(function(data) {
			return(
				<tr key={data.rideId}>
					<td>{data.rideId}</td>
					<td>{data.customerId}</td>
					<td>{data.requestTime}</td>
					<td>{data.status}</td>
					<td>{data.driverId}</td>
				</tr>
			)
		})
		return (
			<table>
				<tr>
					<th>Ride ID</th>
					<th>Customer ID</th> 
					<th>Time Elapsed</th>
					<th>Status</th>
					<th>Driver ID</th>
				</tr>
				{entries}
			</table>
		)
	}
}
