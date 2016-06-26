'use strict'
/*
 *
 * Module will transform location api response json to a standard json format
 *
*/

const constants = require('config/constants');
const countryCodes = require('config/countryCodes');

const generateId = item => item.latitude + '_' + item.longitude;

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
    const formatted2 = formatted.replace(/\s+/g, '-');
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

const transformLocationSearch = data => {
    let transformedData = Object.assign({}, constants.LOCATION_RESPONSE_FORMAT);
    let results = [];
    let resourceList = data.geonames;
    if(typeof resourceList && resourceList.length > 0) {
        resourceList.map((resource, index) => {
            let item = Object.assign({}, constants.LOCATION_RESULT_FORMAT);

            item.city = resource.name;
            item.state = resource.adminName1;
            if(item.state == '')
                item.state = resource.countryName;
            item.countryCode = resource.countryCode;
            item.country = resource.countryName;
            item.longitude = resource.lng;
            item.latitude = resource.lat;
            item.formattedAddressForList = getFormattedAddressForList(item);
            item.formattedAddressForDisplay = getFormattedAddressForDisplay(item);
            item.formattedAddressForUrl = getFormattedAddressForUrl(item);
            item.id = generateId(item);

            results.push(item);
        });
    }

    transformedData.results = results;
    return transformedData;
};

const transformLocationPostal = data => {
    let transformedData = Object.assign({}, constants.LOCATION_RESPONSE_FORMAT);
    let results = [];
    let resourceList = data.postalCodes;
    if(typeof resourceList && resourceList.length > 0) {

        resourceList.map((resource, index) => {
            let item = Object.assign({}, constants.LOCATION_RESULT_FORMAT);

            let countryCode = resource.countryCode;
            let countryName = countryCodes[countryCode];
            if(countryName == undefined)
                countryName = countryCode;
            item.city = resource.placeName;
            item.state = resource.adminName1;
            if(item.state == '')
                item.state = countryName;
            item.countryCode = countryCode;
            item.country = countryName;
            item.longitude = resource.lng;
            item.latitude = resource.lat;
            item.formattedAddressForList = getFormattedAddressForList(item);
            item.formattedAddressForDisplay = getFormattedAddressForDisplay(item);
            item.formattedAddressForUrl = getFormattedAddressForUrl(item);
            item.id = generateId(item);

            results.push(item);
        });
    }

    transformedData.results = results;
    return transformedData;
};

module.exports = (data, type) => {
    switch (type) {
        case constants.POSTAL:
            return transformLocationPostal(data);
        case constants.SEARCH:
        default:
            return transformLocationSearch(data);

    }
};
