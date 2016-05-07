'use strict'

/*
 *
 * Production config that is layered over the base config file (devconfig.js).
 * Properties defined here will append and/or overwrite properties defined in the base config file (devconfig.js)
 *
*/

let config = {};

config = {
	webPort : 8580,
	sslPort : 5443,
};

module.exports = config;
