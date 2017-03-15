'use strict'

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VERSION = require('../package.json').version;
const vendorFileName = 'vendor-' + VERSION + '.js';

module.exports = {
    entry : {
        home : ['./app/entry/home-entry.js'],
        vendor : ['react', 'react-dom', 'redux', 'react-redux', 'redux-logger',
                    'redux-thunk', 'react-router', 'react-router-redux', 'react-slick', 'axios']
    },
    output : {
        path : './dist/js',
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
                    cacheDirectory : true
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
        new webpack.optimize.CommonsChunkPlugin({name : 'vendor', filename : vendorFileName}),
        /*new webpack.ProvidePlugin({
            $ : 'jquery',
            jQuery : 'jquery'
        }),*/
        /*new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),*/
        new ExtractTextPlugin('../css/weatherapp-' + VERSION + '.css'),
    ]
};
