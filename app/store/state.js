'use strict'

const constants = require('config/constants');
import {getUnitFromStorage} from 'app/functions';

const locationsInitialState = {
    jqXhr : null,
    currentSearchTerm : '',
    loading : false,
    locationsList : {},
    currentSuggestionIndex : 0,
    selectedLocation : null,
    savedSelectedLocations : {},
    displayNameFromStorage : ''
};

const weatherInitialState = {...constants.WEATHER_RESPONSE_FORMAT, loading : false, currentUnit : getUnitFromStorage(), currentWeatherCoordinates : ''};

export {locationsInitialState, weatherInitialState};
