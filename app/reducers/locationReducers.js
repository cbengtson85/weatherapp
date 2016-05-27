'use strict'

import {REQUEST_LOCATIONS, UPDATE_XHR, RECEIVE_LOCATIONS} from 'app/actions';

const updateJqXhr = (state = undefined, action) => {
    switch(action.type) {
        case UPDATE_XHR:
            return action.jqXrh;
        default:
            return state;
    }
}

export {updateJqXhr};
