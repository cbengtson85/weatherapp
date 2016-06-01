'use strict'

import {REQUEST_LOCATIONS, RECEIVE_LOCATIONS, UPDATE_XHR} from 'app/actions';

const jqXhr = (state = null, action) => {
    switch(action.type) {
        case UPDATE_XHR:
            return action.jqXrh;
        default:
            return state;
    };
}

const locations = (state = {currentSearchTerm : '', loading: false, locationsList : {}}, action) => {
    switch (action.type) {
        case REQUEST_LOCATIONS:
            return {...state, loading : true, currentSearchTerm : action.searchVal};
        case RECEIVE_LOCATIONS:
            const oldList = state.locationsList;
            const newList = {...oldList, [action.searchVal] : action.response.results};
            return {...state, loading : false, locationsList : newList};
        default:
            return state;
    }
};

export {jqXhr, locations};
