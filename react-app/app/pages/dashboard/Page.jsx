/**
 * Copyright - Panally Internet
 */

/*
 global require module
 */

import React from 'react'
import {connect}  from 'react-redux'

import Dashboard from 'app/pages/dashboard/Dashboard'
import Include from 'app/pages/dashboard/Include'


class Page extends React.Component {
	render() {
		return (
			<div id="react-mount">
				<Include/>
				<Dashboard
					data={this.props.data}
				/>
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
