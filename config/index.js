'use strict'

/*
 *
 * serverLayer values: "dev" or "prod"
 *
*/

const merge = require('server/tools/merge');

const serverLayer = require('minimist')(process.argv.slice(2));
let config = require('config/devconfig.js');

switch(serverLayer.server) {
	case 'prod':
		merge(config, require('config/prodconfig.js'));
		break;
	default:
		break;
}


module.exports = config;
