const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
	const isProduction = env === 'production';

	const plugins = [
		new MiniCssExtractPlugin({
			filename: 'osui-test.css',
		}),
	];

	if (isProduction) {
		plugins.push(
			new CssMinimizerPlugin(),
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					format: {
						comments: false,
					},
					ecma: 6,
				},
				extractComments: false,
			})
		);
	}

	return {
		mode: isProduction ? 'production' : 'development',
		entry: './src/code-imports.js',
		output: {
			filename: 'osui-test.js',
			path: path.resolve(__dirname, 'dist'),
			clean: true, // To clean the output directory before emit.
		},
		devServer: {
			static: {
				directory: path.resolve(__dirname, 'dist'),
			},
			compress: true,
			liveReload: true,
			port: 3000,
			open: true,
		},
		optimization: {
			minimizer: isProduction
				? [
						new CssMinimizerPlugin(),
						new TerserPlugin({
							terserOptions: {
								format: {
									comments: false,
								},
							},
							extractComments: false,
						}),
				  ]
				: [],
		},
		plugins,
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
					],
				},
				{
					test: /\.s[ac]ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					type: 'asset/resource',
				},
			],
		},
	};
};
