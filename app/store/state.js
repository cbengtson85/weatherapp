'use strict'

const constants = require('config/constants');
import {getUnitFromStorage, getViewedLocations, getViewedLocationsObjects} from 'app/functions';

const locationsInitialState = {
    jqXhr : null,
    currentSearchTerm : '',
    loading : false,
    locationsList : {},
    currentSuggestionIndex : 0,
    selectedLocation : null,
    displayNameFromStorage : '',
    currentLocationError : false,
    viewedLocations : getViewedLocations(),
    viewedLocationsObjects : getViewedLocationsObjects()
};

const weatherInitialState = {...constants.WEATHER_RESPONSE_FORMAT,
    loading : false,
    currentUnit : getUnitFromStorage(),
    currentWeatherCoordinates : '',
    showHourly : false
};

export {locationsInitialState, weatherInitialState};
