'use strict'

/*
 *
 * serverLayer values: "dev" or "prod"
 *
*/

const serverLayer = require('minimist')(process.argv.slice(2));
let config = require('config/devconfig.js');

switch(serverLayer.server) {
	case 'prod':
		config = Object.assign(config, require('config/prodconfig.js'));
		break;
	default:
		break;
}


module.exports = config;
