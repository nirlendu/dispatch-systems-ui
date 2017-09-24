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
			console.log(Url.Select + request.rideId + '/' + getUrlParameter('driverId'));
			let onSubmit = function(){
				requestSuperagent
				.get(Url.Select + request.rideId + '/' + getUrlParameter('driverId'))
				.end(function(error, response){
					window.location.reload();
				})
			};
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
						<button onClick={onSubmit}>Select</button>
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

export default Waiting;
