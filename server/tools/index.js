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

const buildWeatherRouteUrl = (formatted, item) => {
    const formatted2 = formatted.replace(/\s+|\/+/g, '-');
    return '/weather/' + formatted2 + '/' + item.latitude + '_' + item.longitude;
}

const getFormattedAddressForUrl = item => {
    let formatted = item.city;
    if(item.countryCode == 'US') {
        if(item.city == item.state)
            return buildWeatherRouteUrl(item.state, item);
        formatted += ' ' + item.state;
        return buildWeatherRouteUrl(formatted, item);
    }
    if(item.city == item.state && item.state == item.country)
        return buildWeatherRouteUrl(formatted, item);
    if(item.city == item.state) {
        formatted += ' ' + item.country;
        return buildWeatherRouteUrl(formatted, item);
    }
    if(item.state == item.country) {
        formatted += ' ' + item.country;
        return buildWeatherRouteUrl(formatted, item);
    }
    formatted += ' ' + item.state + ' ' + item.country;
    return buildWeatherRouteUrl(formatted, item);
}

exports.getFormattedAddressForUrl = getFormattedAddressForUrl;
exports.getFormattedAddressForList = getFormattedAddressForList;
exports.getFormattedAddressForDisplay = getFormattedAddressForDisplay;
exports.logApiRequests = require('server/tools/logApiRequests');
