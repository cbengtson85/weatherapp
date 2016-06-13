'use strict'

const mongodbClient = require('mongodb').MongoClient;
const config = require('config');
const constants = require('config/constants');

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
};

exports.db = () => db;

exports.getApiRequestCountCollection = () => {
    if(db != null && db != undefined) {
        return db.collection(constants.API_REQUESTS_COLLECTION);
    }
    return null;
}
