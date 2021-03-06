
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        path.resolve(__dirname, '../src/main')
    ],
    output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].bundle.[chunkhash].js',
  },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
			  {
				test: /\.html$/,
				use: [
				  {
					loader: "html-loader"
				  }
				]
			  },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader'
                            
                        },
                        {
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'sass-resources-loader',
                            query: {
                                resources: [
                                path.resolve(__dirname, '../src/scss-resources/_colours.scss')
                                ],
                            }
                        }
                    ]
                })
            }
        ],
    },

    plugins: [
		new HtmlWebPackPlugin({
		  template: "./src/index.html",
		  filename: "./index.html"
		}),
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),
         new ExtractTextPlugin('[name].bundle.[chunkhash].css')
    ]
};
