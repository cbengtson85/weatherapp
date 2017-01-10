'use strict'

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VERSION = require('../package.json').version;

module.exports = {
    entry : {
        home : ['./app/entry/home-entry.js'],
        vendor : ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'redux-logger',
                    'redux-thunk', 'react-router', 'react-router-redux', 'react-slick', 'jquery']
    },
    output : {
        path : './dist/js',
        filename : '[name]-' + VERSION + '.js'
    },
    //watch : true,
    devtool : '#source-map',
    module : {
        preLoaders: [
            {
                test: [/\.js$/, /\.es6$/, /\.jsx$/],
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders : [
            {
                test : [/\.js$/, /\.es6$/, /\.jsx$/],
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    cacheDirectory : true
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
            }
        ]
    },
    resolve : {
        extensions : ['', '.js', '.jsx', '.es6'],
        root : path.resolve(__dirname, '..')
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-' + VERSION + '.js', Infinity),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        /*new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),*/
        new ExtractTextPlugin('../css/weatherapp-' + VERSION + '.css')
    ],
    eslint: {
        configFile : '.eslintrc.json'
    }
};
