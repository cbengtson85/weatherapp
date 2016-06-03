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
	apiContextRoot : '/api',
	sslConfig : {
		key : sslKey,
		cert : sslCert
	},
	locationServiceEndpoint : 'http://api.geonames.org/searchJSON',
	locationServicePostalCodeEndpoint : 'http://api.geonames.org/postalCodeSearchJSON',
	locationServiceKey : 'bengtc',
	locationServiceTimeout : 7000,
	locationServiceMaxResults : 10,
	dbUrl : 'mongodb://localhost:27017/weatherapp'
};

module.exports = config;
