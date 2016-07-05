'use strict'

exports.getDirectionFromDeg = num => {
    if(num == undefined)
        return "North";
    let val = Math.floor((num / 22.5) + 0.5);
    let arr = ["North", "North East", "East", "South East", "South", "South West", "West", "North West"];
    return arr[(val % 8)];
}

const getFormattedAddressForList = item => {
    let formatted = item.city;
    if(item.countryCode == 'US') {
        if(item.city == item.state)
            return item.state;
        formatted += ', ' + item.state;
        return formatted;
    }
    if(item.city == item.state && item.state == item.country)
        return formatted;
    if(item.city == item.state) {
        formatted += ', ' + item.country;
        return formatted;
    }
    if(item.state == item.country) {
        formatted += ', ' + item.country;
        return formatted;
    }
    formatted += ', ' + item.state + ', ' + item.country;

    return formatted;
};

const getFormattedAddressForDisplay = item => {
    return getFormattedAddressForList(item);
};

exports.getFormattedAddressForList = getFormattedAddressForList;
exports.getFormattedAddressForDisplay = getFormattedAddressForDisplay;
exports.logApiRequests = require('server/tools/logApiRequests');
