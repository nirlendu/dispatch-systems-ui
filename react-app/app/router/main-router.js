/**
 * Copyright - Panally Internet
 */


/******************
 *
 *
 * Flow of the router config, () signifies next in the heirarchy
 * 
 * api-router --> static-router --> place-rouer --> payment-router --> main-router
 *
 *
 *******************/


// Import external libraries
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Helmet = require('react-helmet');
const request = require('superagent');
const StyleSheetServer = require('aphrodite').StyleSheetServer;
const fs = require('fs');

require('babel-core/register')({
	presets: ['es2015', 'react']
});

const match = ReactRouter.match;
const RouterContext = React.createFactory(ReactRouter.RouterContext);
const Provider = React.createFactory(require('react-redux').Provider);

const compressor = require('app/utils/es6-compressor');
const logger = require('app/utils/logger');
const Url = require('app/config/core/url');

const routes = require('app/config/routes.js').routes;

const router = require('app/router/api-router');

const AssetName = JSON.parse(fs.readFileSync('manifest.json'));
const commonJs = Url.Static.Js + AssetName['common.js'];

router.get('/customer', function(req, res) {

	let store = require('app/pages/customer/redux-store');

	const initialState = {
		data : {},
	}
	store = store.configureStore(initialState);

	match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {

			const {html, css} = StyleSheetServer.renderStatic(() => {
				return ReactDOMServer.renderToString(
					Provider({store: store}, RouterContext(renderProps))
				);
			});
			const head = Helmet.rewind();
			const pageJs = Url.Static.Js + AssetName['customer.js'];
			const webPage = compressor`
				<!doctype html>
				<html>
					<head>
						<meta charset="utf-8" />
						<title>Test App</title>
						<title>${head.title}</title>
						${head.meta.toString()}
						${head.link.toString()}
						${head.style.toString()}
						${head.script.toString()}
						<style data-aphrodite>${css.content}</style>
					</head>
					<body>
						<div id="react-mount">${html}</div>
						<script src=${commonJs}></script>
						<script src=${pageJs}></script>
					</body>
				</html>
			`;
			res.header('Content-Type', 'text/html');
			res.write(webPage);
			res.end();

		} else {
			res.status(404).send('Not found');
		}
	}); 
});

router.get('/driver', function(req, res) {

	const driverId = req.query.driverId;
	let store = require('app/pages/driver/redux-store');
	request
		.get(Url.Fetch.Driver + driverId)
		.end(function(error, response){

		if (error) {
			//TODO
		}

		const initialState = {
			data : response.body,
		}
		store = store.configureStore(initialState);

		match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
			if (error) {
				res.status(500).send(error.message)
			} else if (redirectLocation) {
				res.redirect(302, redirectLocation.pathname + redirectLocation.search)
			} else if (renderProps) {

				const preloadedState = store.getState();
				const head = Helmet.rewind();
				const pageJs = Url.Static.Js + AssetName['driver.js'];
				const webPage = compressor`
					<!doctype html>
					<html>
						<head>
						</head>
						<body>
							<div id="react-mount"></div>
							<script>
							  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
							</script>
							<script src=${commonJs}></script>
							<script src=${pageJs}></script>
						</body>
					</html>
				`;
				res.header('Content-Type', 'text/html');
				res.write(webPage);
				res.end();

			} else {
				res.status(404).send('Not found');
			}
		});    
	}); 
});


router.get('/dashboard', function(req, res) {

	let store = require('app/pages/dashboard/redux-store');

	request
		.get(Url.Fetch.Dashboard)
		.end(function(error, response){

		if (error) {
			//TODO
		}

		const initialState = {
			data : response.body,
		}
		store = store.configureStore(initialState);

		match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
			if (error) {
				res.status(500).send(error.message)
			} else if (redirectLocation) {
				res.redirect(302, redirectLocation.pathname + redirectLocation.search)
			} else if (renderProps) {

				const {html, css} = StyleSheetServer.renderStatic(() => {
					return ReactDOMServer.renderToString(
						Provider({store: store}, RouterContext(renderProps))
					);
				});
				const preloadedState = store.getState();
				const head = Helmet.rewind();
				const pageJs = Url.Static.Js + AssetName['dashboard.js'];
				const webPage = compressor`
					<!doctype html>
					<html>
						<head>
							<meta charset="utf-8" />
							<title>Test App</title>
							<title>${head.title}</title>
							${head.meta.toString()}
							${head.link.toString()}
							${head.style.toString()}
							${head.script.toString()}
							<style data-aphrodite>${css.content}</style>
						</head>
						<body>
							<div id="react-mount">${html}</div>
							<script>
							  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
							</script>
							<script src=${commonJs}></script>
							<script src=${pageJs}></script>
						</body>
					</html>
				`;
				res.header('Content-Type', 'text/html');
				res.write(webPage);
				res.end();

			} else {
				res.status(404).send('Not found');
			}
		});    
	}); 
});


router.post('/customer', function(req, res) {
	const url = Url.Post.Customer;
	request
	.post(url)
	.send(req.body)
	.end(function(error, response){
		if (error) {
			return error;
		}
		if (response.body == ''){
			return res.status(401).send();
		}
		res.status(200).send('Ok');
	});
});


module.exports = router;
