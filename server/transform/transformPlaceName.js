'use strict'
/*
 *
 * Module will transform location api response json to a standard json format
 *
*/

const constants = require('config/constants');
const countryCodes = require('config/countryCodes');
const getFormattedAddressForDisplay = require('server/tools').getFormattedAddressForDisplay;
const getFormattedAddressForUrl = require('server/tools').getFormattedAddressForUrl;

module.exports = (data, q) => {
    let item = Object.assign({}, constants.PLACE_NAME_RESPONSE_FORMAT);
    let resource = data.address;
    if(typeof resource != 'undefined') {
        const location = q.split('_');

        let countryCode = resource.countryCode;
        let countryName = resource.countryName;
        if(countryName == undefined)
            countryName = countryCodes[countryCode];
        if(countryName == undefined)
            countryName = countryCode;
        item.city = resource.placename;
        item.state = resource.adminName1;
        if(item.state == '')
            item.state = countryName;
        item.countryCode = countryCode;
        item.country = countryName;
        item.latitude = location[0];
        item.longitude = location[1];
        item.formattedAddressForDisplay = getFormattedAddressForDisplay(item, true);
        item.formattedAddressForUrl = getFormattedAddressForUrl(item, true);
        item.id = q;
    }
    return item;
};
