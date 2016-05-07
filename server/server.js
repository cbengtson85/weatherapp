'use strict'

const express = require('express');
const app = express();
const https = require('https');
const http = require('http');
const path = require('path');

//set node_path to root directory
GLOBAL.rootPath = path.resolve(__dirname + '/..');
process.env.NODE_PATH = __dirname + '/..';
require('module').Module._initPaths();

//initialize config module
require('config').init();
const config = require('config').config();

//create mongodb connection
require('server/db').connect();

//execute on all requests (ala java web filter)
/*router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});*/

//create http server
let server = http.createServer(app).listen(config.webPort, () => {
	console.log('listening on port ', server.address().port);
});

//create https server
let sslserver = https.createServer(config.sslConfig, app).listen(config.sslPort, () => {
	console.log('listening on port ', sslserver.address().port);
});

//initialize static file routing
app.use(express.static('dist'));
app.use(express.static('static'));

//initialize routing & apply routes
app.use(require('app/routes'));

//404 page not found
app.use((req, res, next) => {
  res.status(404).sendFile(rootPath + '/app/views/err/404.html');
});

//500 internal error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(rootPath + '/app/views/err/500.html');
});
