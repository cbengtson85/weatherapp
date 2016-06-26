'use strict'

//create function to get db collection and update

const dateFormat = require('dateformat');

exports.logLocationApiRequest = () => {
    const dbCollection = require('server/db').getApiRequestCountCollection();
    if(dbCollection != null && dbCollection != undefined) {
        let formattedDate = dateFormat('yyyymmdd');

        console.log(dateFormat('h:MM:ss:l') + '   ' + formattedDate);
        dbCollection.update(
            {_id : formattedDate}, {$inc : {locationRequestsCount : 1}}, {upsert : true}
        );
        console.log(dateFormat('h:MM:ss:l') + '   ' + formattedDate);
    }

}

exports.logWeatherApiRequest = () => {
    const dbCollection = require('server/db').getApiRequestCountCollection();
    if(dbCollection != null && dbCollection != undefined) {
        let formattedDate = dateFormat('yyyymmdd');

        console.log(dateFormat('h:MM:ss:l') + '   ' + formattedDate);
        dbCollection.update(
            {_id : formattedDate}, {$inc : {weatherRequestsCount : 1}}, {upsert : true}
        );
        console.log(dateFormat('h:MM:ss:l') + '   ' + formattedDate);
    }

}
