'use strict'

import {REQUEST_LOCATIONS, UPDATE_XHR, RECEIVE_LOCATIONS} from 'app/actions';

const jqXhr = (state = null, action) => {
    switch(action.type) {
        case UPDATE_XHR:
            return action.jqXrh;
        default:
            return state;
    }
}

const locations = (state = {loading: false, locations : {}}, action) => {
    switch (action.type) {
        case REQUEST_LOCATIONS:
            return {...state, loading : true};
        case RECEIVE_LOCATIONS:
            return {...state, locations : {[action.searchVal] : action.response}}
        default:
            return state;
    }
}

export {jqXhr, locations};
