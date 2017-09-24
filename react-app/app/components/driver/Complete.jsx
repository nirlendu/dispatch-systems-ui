/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import requestSuperagent from 'superagent'

import CoreStyle from 'app/config/core/style'
import Url from 'app/config/core/url'

const Style = StyleSheet.create({
	Parent : {
		[CoreStyle.PC.BREAKPOINT]:{
		},
		[CoreStyle.TAB.BREAKPOINT]:{
		},
		[CoreStyle.MOB.BREAKPOINT]:{
		},
	}
})

class Complete extends React.Component {

	render() {
		const eachWaitingRequests = this.props.data.map(function(request){
			return(
				<div key={request.rideId}>
					<div>
						{request.rideId}
					</div>
					<div>
						{request.customerId}
					</div>
					<div>
						{request.requestTime}
					</div>
					<div>
						{request.ongoingTime}
					</div>
					<div>
						{request.completeTime}
					</div>
				</div>
			)
		});
		return (
			<div className={css(Style.Parent)}>
				{eachWaitingRequests}
			</div>
		);
	}
}

export default Complete;
