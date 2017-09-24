/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import {connect}  from 'react-redux'

import Customer from 'app/pages/customer/Customer'
import Include from 'app/pages/customer/Include'


class Page extends React.Component {
	render() {
		return (
			<div id="react-mount">
				<Include/>
				<Customer/>
			</div>
		);
	}
}

const PageState = function(state){
	return {
		data: state.data
	}
};

Page = connect(
	PageState
)(Page);

module.exports = Page;
