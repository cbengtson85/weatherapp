'use strict'

import * as ACTIONS from 'app/actions';
import {locationsInitialState} from 'app/store';
import {LOCATION_CHANGE} from 'react-router-redux';

const moveSuggestionIndex = (state, direction) => {
    let searchTerm = state.currentSearchTerm;
    let locations = state.locationsList[searchTerm];
    if(locations == undefined || locations.length < 1)
        return 0;
    let currentIndex = state.currentSuggestionIndex;
    let nextIndex = currentIndex;
    if(direction == 'down') {
        if(currentIndex < locations.length - 1)
            nextIndex = currentIndex + 1;
    } else {
        if(currentIndex > 0)
            nextIndex = currentIndex - 1;
    }
    return nextIndex;
};

const locations = (state = locationsInitialState, action) => {
    switch (action.type) {
        case ACTIONS.REQUEST_LOCATIONS:
            return {...state, jqXhr : action.jqXhr, loading : true, currentSearchTerm : action.searchVal, currentSuggestionIndex : 0};
        case ACTIONS.RECEIVE_LOCATIONS:
            const oldList = state.locationsList;
            let newList = oldList;
            if(action.response.results != undefined && action.response.results.length > 0)
                newList = {...oldList, [action.searchVal] : action.response.results};
            return {...state, loading : false, locationsList : newList, currentSuggestionIndex : 0};
        case LOCATION_CHANGE:
        case ACTIONS.CLEAR_SEARCH_RESULTS:
            let searchVal = action.searchVal;
            if(searchVal == undefined)
                searchVal = '';
            return {...state, currentSearchTerm : searchVal, currentSuggestionIndex : 0};
        case ACTIONS.GET_CACHED_LOCATIONS:
            return {...state, currentSearchTerm : action.searchVal, currentSuggestionIndex : 0};
        case ACTIONS.MOVE_HIGHLIGHTED:
            return {...state, currentSuggestionIndex : moveSuggestionIndex(state, action.direction)};
        case ACTIONS.MOUSE_HIGHLIGHT:
            return {...state, currentSuggestionIndex : action.index};
        default:
            return state;
    }
};

export {locations};
