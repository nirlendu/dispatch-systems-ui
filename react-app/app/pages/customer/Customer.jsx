/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import request from 'superagent'
import { StyleSheet, css } from 'aphrodite'
import randomstring from 'randomstring'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import CoreStyle from  'app/config/core/style'
import Form from 'app/containers/customer/Form'

// import 'app/assets/css/redux-form.css'

const reducer = combineReducers({
  form: reduxFormReducer
})

const store = createStore(reducer);

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

export default class Customer extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(value){
		let customerData = value;
		customerData.rideId = randomstring.generate({
			length: 5
		}).toUpperCase();
		request
		.post('/customer')
		.send(customerData)
		.set('Accept', 'application/json')
		.end(function(error, response){
			if (error) {
				// TODO
			}
			else{
				window.location.replace('/dashboard');
			}
		});
	}

	render() {
		return (
			<Provider store={store}>
				<div className={css(Style.Wrapper)}>
					<Form
						onSubmit={this.onSubmit}
					/>
				</div>
			</Provider>
		)
	}

}
