'use strict'

/*locationAPiCollection : {
    _id : '20170607',
    requestsCount : 5;


}*/
const dateFormat = require('dateformat');
const constants = require('config/constants');

exports.logLocationApiRequest = () => {
    let db = require('server/db').db();
    if(db != null && db != undefined) {
        let formattedDate = dateFormat('yyyymmdd');
        console.log(dateFormat('h:MM:ss:l') + '   ' + formattedDate);
        db.collection(constants.LOCATION_API_COLLECTION).update(
            {_id : formattedDate}, {$inc : {numOfRequests : 1}}, {upsert : true}
        );
        console.log(dateFormat('h:MM:ss:l') + '   ' + formattedDate);
    }

}
