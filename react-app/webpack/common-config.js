
/**
 * Copyright - Panally Internet
 */

const Webpack = require('webpack');
const HappyPack = require('happypack');
const path = require('path');
const CommonsPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ManifestPlugin = require('webpack-manifest-plugin');

process.noDeprecation = true;

module.exports = {
	entry: {
		'driver': path.resolve('app/pages/driver/client.js'),
		'customer': path.resolve('app/pages/customer/client.js'),
		'dashboard': path.resolve('app/pages/dashboard/client.js')
	},
	output: {
		path: path.resolve('../assets/static/js'),
		filename: '[name].[chunkhash].js',
	},
	plugins: [
		new Webpack.NoEmitOnErrorsPlugin(),
		new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new HappyPack({
			cache: true,
			loaders: [{
				loader: 'babel-loader',
				options: {
						presets: ['es2015', 'react']
					}
				}],
			threads: 4
		}),
		new CommonsPlugin({
			minChunks: 3,
			name: "common"
		}),
		new ManifestPlugin({
			fileName : '../../../react-app/manifest.json'
		})
	],
	target: 'web',
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'happypack/loader',
				query: {
					presets: ['es2015', 'react']
				},
				exclude: [/node_modules/],
			},
			{
				test: /\.js$/,
				exclude: /node_modules\/(?!(stardust))/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: [
						'transform-runtime',
						'add-module-exports',
						'transform-decorators-legacy',
					],
					presets: ['es2015', 'react', 'stage-1'],
				},
			},
			{
				test: /\.jsx?$/,
					loader: 'babel-loader',
					query: {
						presets: ['react'],
				},
				exclude: [/node_modules/],
			},
			{ 
				test: /\.json$/, 
				loader: 'json-loader' 
			}
		],
	},
	resolve: {
		extensions: ['.Webpack.js', '.web.js', '.js', '.jsx'],
		modules: ['node_modules', path.resolve(__dirname, 'app')],
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
};
