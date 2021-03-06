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
exports.STYLE = 'style';
exports.STYLE_VALUE = 'FULL';
exports.LATITUDE = 'lat';
exports.LONGITUDE = 'lng';
exports.VIEWED_LOCATIONS = 'viewedLocations';
exports.LOCATION_RESPONSE_FORMAT = {
    results : []
};
exports.LOCATION_RESULT_FORMAT = {
    id : '',
    city : '',
    state : '',
    countryCode : '',
    country : '',
    formattedAddressForList : '',
    formattedAddressForDisplay : '',
    formattedAddressForUrl : '',
    longitude : '',
    latitude : ''
};
exports.LOCATION_SEARCH_ENDPOINT = '/api/location-search/';
exports.PLACE_NAME_RESPONSE_FORMAT = {
    id : '',
    city : '',
    state : '',
    countryCode : '',
    country : '',
    formattedAddressForDisplay : ''
};
exports.PLACE_NAME_ENDPOINT = '/api/place-name-search/';
exports.MIN_SEARCH_LENGTH = 3;
exports.API_REQUESTS_COLLECTION = 'apiRequests';
exports.MAX_FORECAST_DAYS = 6;
exports.WEATHER_DATA_FORMAT = {
    dayOfWeek : '',
    formattedDate : '',
    formattedDateHourly : '',
    icon : '',
    temp : '',
    tempHigh : '',
    tempLow : '',
    precipitation : '',
    windSpeed : '',
    windDirection : ''
};

exports.WEATHER_RESPONSE_FORMAT = {
    unitTemp : 'F',
    unitSpeed : 'mph',
    current : null,
    hourly : [],
    daily : []
};
exports.WEATHER_DATA_ENDPOINT = '/api/weather-data/';
exports.MAX_STORED_LOCATIONS = 10;
exports.GEOLOCATION_OPTIONS = {
    enableHighAccuracy: true,
    timeout: 7000
};
exports.SLIDER_OPTIONS_LOCATIONS = {
    infinite: false,
    speed: 300,
    slidesToScroll: 1,
    variableWidth: true
}
exports.SLIDER_OPTIONS_HOURLY = {
    infinite: false,
    speed: 400,
    variableWidth: true,
    swipeToSlide: true,
    slidesToScroll: 4
}
exports.CURRENT_LOCATION_ERROR = 'Error determining location, please try again or check location permissions.';
exports.ERROR_MESSAGE_DISPLAY_TIMEOUT = 5000;
exports.VIEW_EXTENDED_FORECAST_TEXT = 'View Extended Forecast';
exports.VIEW_HOURLY_FORECAST_TEXT = 'View Forecast for the Next 48 Hours';
