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
	}
})

class Waiting extends React.Component {

	render() {
		const getUrlParameter = function(sParam) {
		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		        sURLVariables = sPageURL.split('&'),
		        sParameterName,
		        i;

		    for (i = 0; i < sURLVariables.length; i++) {
		        sParameterName = sURLVariables[i].split('=');

		        if (sParameterName[0] === sParam) {
		            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
		    }
		};
		const eachWaitingRequests = this.props.data.map(function(request){
			let onSubmit = function(){
				requestSuperagent
				.get(Url.Select + request.rideId + '/' + getUrlParameter('driverId'))
				.end(function(error, response){
					window.location.reload();
				})
			};
			console.log(Url.Select + request.rideId + '/' + getUrlParameter('driverId'));
			let timeAgo = moment(request.requestTime).fromNow();
			return(
				<div key={request.rideId} className={css(Style.Container)}>
					<div>
						Ride ID - {request.rideId}
					</div>
					<div>
						Customer ID - {request.customerId}
					</div>
					<div>
						Requested - {timeAgo}
					</div>
					<div>
						<button onClick={onSubmit}>Select</button>
					</div>
				</div>
			)
		});
		return (
			<div className={css(Style.Parent)}>
				&nbsp;&nbsp;Waiting Rides<br/>
				{eachWaitingRequests}
			</div>
		);
	}
}

export default Waiting;
