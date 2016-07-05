'use strict'

import {actionCreator} from 'app/functions';

import {setLocalStorageItem} from 'app/functions';
const constants = require('config/constants');

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const GET_CACHED_LOCATIONS = 'GET_CACHED_LOCATIONS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const MOVE_HIGHLIGHTED = 'MOVE_HIGHLIGHTED';
export const MOUSE_HIGHLIGHT = 'MOUSE_HIGHLIGHT';
export const RECEIVE_PLACE_NAME_DATA = 'RECEIVE_PLACE_NAME_DATA';
export const STORE_LOCATION_IN_STORAGE = 'STORE_LOCATION_IN_STORAGE';

const requestLocations = actionCreator(REQUEST_LOCATIONS, 'searchVal', 'jqXhr');
const receiveLocations = actionCreator(RECEIVE_LOCATIONS, 'searchVal', 'response');
const getCachedLocations = actionCreator(GET_CACHED_LOCATIONS, 'searchVal');
const clearSearchResults = actionCreator(CLEAR_SEARCH_RESULTS, 'searchVal');
const moveHighlighted = actionCreator(MOVE_HIGHLIGHTED, 'direction');
const mouseHighlight = actionCreator(MOUSE_HIGHLIGHT, 'index');
const receivePlaceName = actionCreator(RECEIVE_PLACE_NAME_DATA, 'addressDisplayName');
const storeLocationInStorage = actionCreator(STORE_LOCATION_IN_STORAGE, 'coordinates', 'addressDisplayName', 'url');

const locationRequestNeeded = (state, searchVal) => {
    if(!state.locations.locationsList[searchVal])
        return true;
    else
        return false;
};

const locationsRequest = (state, searchVal) => {
    return dispatch => {
        if(searchVal.length >= constants.MIN_SEARCH_LENGTH) {
            let xhrObj = state.locations.jqXhr;
            if(xhrObj != undefined && xhrObj != null)
                xhrObj.abort();
            $.ajax({
                type : 'get',
                url : constants.LOCATION_SEARCH_ENDPOINT + encodeURI(searchVal),
                beforeSend : function(jqXhr) {
                    dispatch(requestLocations(searchVal, jqXhr));
                }
            }).done(function(responseObj) {
                dispatch(receiveLocations(searchVal, responseObj));
            }).fail(function(x,y,z) {
                dispatch(receiveLocations(searchVal, constants.LOCATION_RESPONSE_FORMAT));
            });
        } else {
            dispatch(clearSearchResults(searchVal));
        }
    }
};

const getLocations = searchVal => {
    return (dispatch, getState) => {
        if(locationRequestNeeded(getState(), searchVal))
            return dispatch(locationsRequest(getState(), searchVal));
        else
            return dispatch(getCachedLocations(searchVal));
    }
};

const getPlaceName = coordinates => {
    return (dispatch, getState) => {
        $.ajax({
            type : 'get',
            url : constants.PLACE_NAME_ENDPOINT + encodeURI(coordinates),
        }).done(function(responseObj) {
            setLocalStorageItem(coordinates, JSON.stringify({name : responseObj.formattedAddressForDisplay, url : responseObj.formattedAddressForUrl}));
            dispatch(receivePlaceName(responseObj.formattedAddressForDisplay));
        });
    }
};

export {getLocations, clearSearchResults, moveHighlighted, mouseHighlight, getPlaceName};
