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

const getSelectedLocation = state => {
    const searchTerm = state.currentSearchTerm;
    const locationsList = state.locationsList;
    const currentLocationList = locationsList[searchTerm];
    const currentIndex = state.currentSuggestionIndex;
    let selectedLocation;
    if(currentLocationList != undefined && currentLocationList.length > 0)
        selectedLocation = currentLocationList[currentIndex];
    else
        selectedLocation = null;

    return selectedLocation;
};

const locations = (state = locationsInitialState, action) => {
    switch (action.type) {
        case ACTIONS.REQUEST_LOCATIONS:
            return {...state, jqXhr : action.jqXhr, loading : true, currentSearchTerm : action.searchVal, currentSuggestionIndex : 0};
        case ACTIONS.RECEIVE_LOCATIONS: {
            const oldList = state.locationsList;
            let newList = oldList;
            if(action.response.results != undefined && action.response.results.length > 0)
                newList = {...oldList, [action.searchVal] : action.response.results};
            let newStateReceive = {...state, loading : false, locationsList : newList, currentSuggestionIndex : 0};
            return {...newStateReceive, selectedLocation : getSelectedLocation(newStateReceive)};
        }
        case LOCATION_CHANGE:
            if(action.payload.pathname != undefined && action.payload.pathname.indexOf('/weather/') > -1) {
                let selectedLocation = getSelectedLocation(state);
                let savedSelectedLocations = state.savedSelectedLocations;
                if(selectedLocation != null)
                    savedSelectedLocations = {...state.savedSelectedLocations, [selectedLocation.id] : selectedLocation};

                return {...state, currentSearchTerm : '', currentSuggestionIndex : 0, selectedLocation : selectedLocation, savedSelectedLocations : savedSelectedLocations};
            } else {
                return {...state, currentSearchTerm : '', currentSuggestionIndex : 0, selectedLocation : null};
            }
        case ACTIONS.CLEAR_SEARCH_RESULTS: {
            let searchVal = action.searchVal;
            if(searchVal == undefined)
                searchVal = '';
            return {...state, currentSearchTerm : searchVal, currentSuggestionIndex : 0};
        }
        case ACTIONS.GET_CACHED_LOCATIONS:
            return {...state, currentSearchTerm : action.searchVal, currentSuggestionIndex : 0};
        case ACTIONS.MOVE_HIGHLIGHTED: {
            let newStateMove = {...state, currentSuggestionIndex : moveSuggestionIndex(state, action.direction)};
            return {...newStateMove, selectedLocation : getSelectedLocation(newStateMove)};
        }
        case ACTIONS.MOUSE_HIGHLIGHT: {
            let newStateMouse = {...state, currentSuggestionIndex : action.index};
            return {...newStateMouse, selectedLocation : getSelectedLocation(newStateMouse)};
        }
        case ACTIONS.RECEIVE_PLACE_NAME_DATA:
            return {...state, displayNameFromStorage : action.addressDisplayName};
        case ACTIONS.REQUEST_CURRENT_LOCATION:
            return {...state, loading : true};
        case ACTIONS.RECEIVE_CURRENT_LOCATION_SUCCESS:
            return {...state, currentLocationError : false, loading : false};
        case ACTIONS.RECEIVE_CURRENT_LOCATION_ERROR:
            return {...state, currentLocationError : true, loading : false};
        case ACTIONS.HIDE_LOCATION_ERROR:
            return {...state, currentLocationError : false};
        default:
            return state;
    }
};

export {locations};
