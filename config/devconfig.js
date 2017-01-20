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
const nodeArgs = require('minimist')(process.argv.slice(3));

let mongoHostName = 'localhost';
if(nodeArgs.mongoHost != undefined)
    mongoHostName = nodeArgs.mongoHost;

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
    placeNameServiceEndpoint : 'http://api.geonames.org/findNearestAddressJSON',
    placeNameServiceKey : 'bengtc',
    placeNameServiceTimeout : 7000,
    weatherServiceEndpoint : 'https://api.darksky.net/forecast/',
    weatherServiceKey : '24a90ebe31382974ba7d38837c986249',
    weatherServiceTimeout : 10000,
    dbUrl : 'mongodb://' + mongoHostName + ':27017/weatherapp'
};

module.exports = config;
