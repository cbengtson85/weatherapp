'use strict'

exports.SEARCH = 'search';
exports.POSTAL = 'postal';
exports.USER_NAME = 'username';
exports.FUZZY = 'fuzzy';
exports.FUZZY_VALUE = '.7',
exports.MAX_ROWS = 'maxRows';
exports.Q = 'q';
exports.POSTAL_CODE_STARTSWITH = 'postalcode_startsWith';
exports.POSTAL_CODE = 'postalcode';
exports.COUNTRY_BIAS = 'countryBias';
exports.LOCATION_RESPONSE_FORMAT = {
    success : false,
    results : []
};
exports.LOCATION_RESULT_FORMAT = {
        city : '',
        state : '',
        countryCode : '',
        country : '',
        formattedAddressForList : '',
        formattedAddressForDisplay : '',
        longitude : '',
        latitude : ''
};
exports.LOCATION_SEARCH_ENDPOINT = '/api/location-search/';
