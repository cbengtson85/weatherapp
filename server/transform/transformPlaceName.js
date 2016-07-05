'use strict'
/*
 *
 * Module will transform location api response json to a standard json format
 *
*/

const constants = require('config/constants');
const countryCodes = require('config/countryCodes');
const getFormattedAddressForDisplay = require('server/tools').getFormattedAddressForDisplay;


module.exports = (data, q) => {
    let item = Object.assign({}, constants.PLACE_NAME_RESPONSE_FORMAT);
    let results = [];
    let resourceList = data.geonames;
    if(typeof resourceList != 'undefined' && resourceList.length > 0) {
        let resource = resourceList[0];

        let countryCode = resource.countryCode;
        let countryName = resource.countryName;
        if(countryName == undefined)
            countryName = countryCodes[countryCode];
        if(countryName == undefined)
            countryName = countryCode;
        item.city = resource.name;
        item.state = resource.adminName1;
        if(item.state == '')
            item.state = countryName;
        item.countryCode = countryCode;
        item.country = countryName;
        item.formattedAddressForDisplay = getFormattedAddressForDisplay(item);
        item.id = q;
    }

    return item;
};