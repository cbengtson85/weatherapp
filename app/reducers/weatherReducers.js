'use strict'

import * as ACTIONS from 'app/actions';
import {weatherInitialState} from 'app/store';
import {LOCATION_CHANGE} from 'react-router-redux';

const weather = (state = weatherInitialState, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_UNIT:
            return {...state, currentUnit : action.unit};
        case ACTIONS.REQUEST_WEATHER:
            return {...state, loading : true, currentWeatherCoordinates : action.coordinates, currentUnit : action.unit};
        case ACTIONS.RECEIVE_WEATHER:
            const newState = {...action.response, loading : false};
            return {...state, ...newState};
        case LOCATION_CHANGE:
            if(action.payload.pathname == undefined || action.payload.pathname.indexOf('/weather/') < 0)
                return {...state, currentWeatherCoordinates : ''};
        default:
            return state;
    }
};

export {weather};
