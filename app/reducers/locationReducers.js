'use strict'

import {REQUEST_LOCATIONS, RECEIVE_LOCATIONS, GET_CACHED_LOCATIONS, RETURN_NO_RESULTS} from 'app/actions';
import {locationsInitialState} from 'app/store';

const locations = (state = locationsInitialState, action) => {
    switch (action.type) {
        case REQUEST_LOCATIONS:
            return {...state, jqXhr : action.jqXhr, loading : true, currentSearchTerm : action.searchVal};
        case RECEIVE_LOCATIONS:
            const oldList = state.locationsList;
            let newList = oldList;
            if(action.response.results != undefined && action.response.results.length > 0)
                newList = {...oldList, [action.searchVal] : action.response.results};
            return {...state, loading : false, locationsList : newList};
        case RETURN_NO_RESULTS:
            return {...state, currentSearchTerm : ''};
        case GET_CACHED_LOCATIONS:
            return {...state, currentSearchTerm : action.searchVal};
        default:
            return state;
    }
};

export {locations};
