'use strict'

const mongodbClient = require('mongodb').MongoClient;
const config = require('config');

let db;

exports.connect = () => {
    //connect to mongo DB
    mongodbClient.connect(config.dbUrl, (err, database) => {
    	if(err) {
    		console.log('Unable to connect to mongoDB', err);
    	} else {
    		//assign db
    		db = database;
    		console.log('connected to mongo DB');
    	}
    });
}

exports.db = () => db;
