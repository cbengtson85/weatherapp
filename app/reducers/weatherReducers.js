'use strict'

import * as ACTIONS from 'app/actions';
import {weatherInitialState} from 'app/store';

import {setLocalStorageItem} from 'app/functions';
const constants = require('config/constants');

const updateViewedLocations = state => {
    let locations = state.viewedLocations.concat();
    let coordinates = state.currentWeatherCoordinates;
    if(locations.indexOf(coordinates) < 0) {
        locations.push(coordinates);
        if(locations.length > constants.MAX_STORED_LOCATIONS) {
            locations.splice(0, 1);
        }
    } else {
        let index = locations.indexOf(coordinates);
        locations.splice(index, 1);
        locations.push(coordinates);
    }
    setLocalStorageItem(constants.VIEWED_LOCATIONS, locations.toString());
    return locations;
}

const removeViewedLocation = (state, coordinates) => {
    let locations = state.viewedLocations.concat();
    if(locations.indexOf(coordinates) > -1) {
        let index = locations.indexOf(coordinates);
        locations.splice(index, 1);
    }
    setLocalStorageItem(constants.VIEWED_LOCATIONS, locations.toString());
    return locations;
}

const weather = (state = weatherInitialState, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_UNIT:
            return {...state, currentUnit : action.unit};
        case ACTIONS.REQUEST_WEATHER:
            return {...state, loading : true, currentWeatherCoordinates : action.coordinates, currentUnit : action.unit};
        case ACTIONS.RECEIVE_WEATHER: {
            const hourly = action.hourly ? true : false;
            const newState = {...action.response, loading : false, viewedLocations : updateViewedLocations(state),
                showHourly: hourly};
            return {...state, ...newState};
        }
        case ACTIONS.SHOW_HOURLY_FORECAST:
            return {...state, showHourly : action.showHourly}
        case ACTIONS.REMOVE_VIEWED_LOCATION:
            return {...state, viewedLocations : removeViewedLocation(state, action.coordinates)}
        case ACTIONS.CLEAR_COORDINATES:
            return {...state, currentWeatherCoordinates : ''}
        default:
            return state;
    }
};

export {weather};
