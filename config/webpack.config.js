'use stric'
const path = require('path');

module.exports = {
    entry : './app/components/Home.jsx',
    output : {
        path : './dist/js',
        filename : 'home.js',
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
                    presets : ['react', 'es2015', 'stage-2'],
                    plugins: ['transform-es2015-function-name']
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
