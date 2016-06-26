'use strict'

exports.getDirectionFromDeg = num => {
    if(num == undefined)
        return "North";
    let val = Math.floor((num / 22.5) + 0.5);
    let arr = ["North", "North East", "East", "South East", "South", "South West", "West", "North West"];
    return arr[(val % 8)];
}
exports.transformLocation = require('server/tools/transformLocation');
exports.transformWeather= require('server/tools/transformWeather');
exports.logApiRequests = require('server/tools/logApiRequests');
