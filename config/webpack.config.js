'use strict'
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry : {
        home : './app/entry/home-entry.js',
        vendor : ['react', 'react-dom', 'jquery']//immutable react-redux react-router redux
    },
    output : {
        path : './dist/js',
        filename : '[name].js'
    },
    watch : true,
    module : {
        loaders : [
            {
                test : [/\.js$/, /\.es6$/, /\.jsx$/],
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    cacheDirectory : true,
                    presets : ['react', 'es2015', 'stage-2'],
                    plugins: ['transform-es2015-function-name', 'transform-object-rest-spread']
                }
            }
        ]
    },
    resolve : {
        extensions : ['', '.js', '.jsx', '.es6'],
        root : path.resolve(__dirname + '..', ''),
        modulesDirectories : ['node_modules', '..']
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
