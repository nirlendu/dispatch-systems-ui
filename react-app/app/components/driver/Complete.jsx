/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import requestSuperagent from 'superagent'
import moment from 'moment'

import CoreStyle from 'app/config/core/style'
import Url from 'app/config/core/url'

const Style = StyleSheet.create({
	Parent : {
		[CoreStyle.PC.BREAKPOINT]:{
			width: '33%'
		},
		[CoreStyle.TAB.BREAKPOINT]:{
		},
		[CoreStyle.MOB.BREAKPOINT]:{
		},
	},
	Container: {
		[CoreStyle.PC.BREAKPOINT]:{
			border: '1px solid rgba(128, 128, 128, 0.45)',
			borderRadius: '5px',
			padding: '10%',
			margin: '10%',
			color: [CoreStyle.COLOR.GREY]
		},
		[CoreStyle.TAB.BREAKPOINT]:{
		},
		[CoreStyle.MOB.BREAKPOINT]:{
		},
	},
})

class Complete extends React.Component {

	render() {
		const eachWaitingRequests = this.props.data.map(function(request){
			let requestAgo = moment(request.requestTime).fromNow();
			let ongoingAgo = moment(request.ongoingTime).fromNow();
			let completeAgo = moment(request.completeTime).fromNow();
			return(
				<div key={request.rideId} className={css(Style.Container)}>
					<div>
						Ride ID - {request.rideId}
					</div>
					<div>
						Customer ID - {request.customerId}
					</div>
					<div>
						Requested - {requestAgo}
					</div>
					<div>
						Started - {ongoingAgo}
					</div>
					<div>
						Completed - {completeAgo}
					</div>
				</div>
			)
		});
		return (
			<div className={css(Style.Parent)}>
				&nbsp;&nbsp;Completed Rides<br/>
				{eachWaitingRequests}
			</div>
		);
	}
}

export default Complete;
