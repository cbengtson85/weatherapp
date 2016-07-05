'use strict'
/*
 *
 * Module will transform location api response json to a standard json format
 *
*/

const constants = require('config/constants');
const countryCodes = require('config/countryCodes');
const getFormattedAddressForList = require('server/tools').getFormattedAddressForList;
const getFormattedAddressForDisplay = require('server/tools').getFormattedAddressForDisplay;
const getFormattedAddressForUrl = require('server/tools').getFormattedAddressForUrl;

const generateId = item => item.latitude + '_' + item.longitude;

const transformLocationSearch = data => {
    let transformedData = Object.assign({}, constants.LOCATION_RESPONSE_FORMAT);
    let results = [];
    let resourceList = data.geonames;
    if(typeof resourceList != 'undefined' && resourceList.length > 0) {
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
    if(typeof resourceList != 'undefined' && resourceList.length > 0) {

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
