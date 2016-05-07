'use strict'

/*
 *
 * serverLayer values: "dev" or "prod"
 *
*/

const merge = require('tools/merge');

const serverLayer = require('minimist')(process.argv.slice(2));
let config = require('config/devconfig.js');

exports.init = () => {
	switch(serverLayer.server) {
	    case 'prod':
			merge(config, require('config/prodconfig.js'));
			break;
	    default:
			break;
	}
}

exports.config = () => config;
