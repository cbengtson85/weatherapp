'use strict'

import * as ACTIONS from 'app/actions';
import {weatherInitialState} from 'app/store';

const weather = (state = weatherInitialState, action) => {
    switch (action.type) {
        case ACTIONS.REQUEST_WEATHER:
            return {...state, loading : true};
        case ACTIONS.RECEIVE_WEATHER:
            const newState = {...action.response, loading : false};
            return {...state, ...newState};
        default:
            return state;
    }
};

export {weather};
