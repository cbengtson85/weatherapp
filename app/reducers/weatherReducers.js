'use strict'

import * as ACTIONS from 'app/actions';
import {weatherInitialState} from 'app/store';

const weather = (state = weatherInitialState, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_UNIT:
            return {...state, currentUnit : action.unit};
        case ACTIONS.REQUEST_WEATHER:
            return {...state, loading : true, currentWeatherCoordinates : action.coordinates, currentUnit : action.unit};
        case ACTIONS.RECEIVE_WEATHER: {
            const hourly = action.hourly ? true : false;
            const newState = {...action.response, loading : false, showHourly: hourly};
            return {...state, ...newState};
        }
        case ACTIONS.SHOW_HOURLY_FORECAST:
            return {...state, showHourly : action.showHourly}
        case ACTIONS.CLEAR_COORDINATES:
            return {...state, currentWeatherCoordinates : ''}
        default:
            return state;
    }
};

export {weather};
