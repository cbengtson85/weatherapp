'use strict'

const constants = require('config/constants');

const locationsInitialState = {
    jqXhr : null,
    currentSearchTerm : '',
    loading : false,
    locationsList : {},
    currentSuggestionIndex : 0,
    selectedLocation : null,
    savedSelectedLocations : {}
};

const weatherInitialState = {...constants.WEATHER_RESPONSE_FORMAT, loading : false, currentUnit : 'F', currentWeatherCoordinates : ''};

export {locationsInitialState, weatherInitialState};
