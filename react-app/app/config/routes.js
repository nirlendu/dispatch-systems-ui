/**
 * Copyright - Panally Internet
 */

import React from 'react'

import {Route, Router, IndexRoute, browserHistory} from 'react-router'

import App from 'app/pages/App'

import Driver from 'app/pages/driver/Page'
import Customer from 'app/pages/customer/Page'
import Dashboard from 'app/pages/dashboard/Page'

if (typeof window === 'object') {
    function createElement(Component, props) {
        return <Component {...props} {...window.PROPS} />;
    }
}

const routes = (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='/driver' component={Driver}/>
			<Route path='/customer' component={Customer}/>
			<Route path='/dashboard' component={Dashboard}/>
		</Route>
    </Router>
)

module.exports = {
  routes: routes
}
