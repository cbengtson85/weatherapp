'use stric'
const path = require('path');

module.exports = {
    entry : './app/components/index.jsx',
    output : {
        path : './dist/js',
        filename : 'bundle.js',
    },
    //watch : true,
    module : {
        loaders : [
            {
                test : [/\.js$/, /\.es6$/, /\.jsx$/],
                exclude : /node_modules/,
                loader : 'babel-loader',
                query : {
                    cacheDirectory : true,
                    presets : ['react', 'es2015']
                }
            }
        ]
    },
    resolve : {
        extensions : ['', '.js', '.jsx', '.es6'],
        root : path.resolve(__dirname + '..', ''),
        modulesDirectories : ['node_modules', '..']
    }
}
