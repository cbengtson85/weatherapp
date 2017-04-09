'use strict'

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VERSION = require('../package.json').version;

module.exports = {
    entry : {
        home : ['./app/entry/home-entry.js']
    },
    output : {
        path : path.resolve(__dirname, '..', 'dist/js'),
        filename : '[name]-' + VERSION + '.js'
    },
    //watch : true,
    devtool : '#source-map',
    module : {
        rules : [
            {
                test : [/\.js$/, /\.es6$/, /\.jsx$/],
                loader : 'eslint-loader',
                enforce : 'pre',
                options : {
                    configFile : '.eslintrc.json'
                },
                exclude : /node_modules/
            },
            {
                test : [/\.js$/, /\.es6$/, /\.jsx$/],
                loader : 'babel-loader',
                options : {
                    cacheDirectory : true,
                    babelrc : false,
                    presets : ["react", [ "es2015", {"modules" : false }], "stage-2"]
                },
                exclude : /node_modules/
            },
            {
                test : /\.css$/,
                loader : ExtractTextPlugin.extract({loader : 'css-loader?sourceMap'})
            }
        ]
    },
    resolve : {
        extensions : ['.js', '.jsx', '.es6', '.css'],
        modules : [path.resolve(__dirname, '..'), 'node_modules']
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            minChunks: ({resource}) => /node_modules/.test(resource)
        }),
        new webpack.optimize.CommonsChunkPlugin({
                name : 'manifest'
        }),
        new ExtractTextPlugin('../css/weatherapp-' + VERSION + '.css'),
    ]
};
