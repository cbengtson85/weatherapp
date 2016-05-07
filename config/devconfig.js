'use strict'

/*
 *
 * THIS IS THE BASE CONFIG FILE, ANY OTHER CONFIG FILES WILL BE LAYERED OVER THIS ONE
 *
*/

const fs = require('fs');
let config = {};

const sslKey = fs.readFileSync(rootPath + '/config/ssl/key.pem');
const sslCert = fs.readFileSync(rootPath + '/config/ssl/cert.pem');

config = {
	webPort : 8080,
	sslPort : 4443,
	serverName : 'localhost',
	contextRoot : '/',

	sslConfig : {
		key : sslKey,
		cert : sslCert
	},

	dbUrl : 'mongodb://localhost:27017/weatherapp'
};

module.exports = config;
