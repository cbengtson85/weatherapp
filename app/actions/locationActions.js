'use strict'

import {actionCreator} from 'app/functions';
import {push} from 'react-router-redux';

import {setLocalStorageItem} from 'app/functions';
const constants = require('config/constants');

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const GET_CACHED_LOCATIONS = 'GET_CACHED_LOCATIONS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const MOVE_HIGHLIGHTED = 'MOVE_HIGHLIGHTED';
export const MOUSE_HIGHLIGHT = 'MOUSE_HIGHLIGHT';
export const RECEIVE_PLACE_NAME_DATA = 'RECEIVE_PLACE_NAME_DATA';
export const REQUEST_CURRENT_LOCATION = 'REQUEST_CURRENT_LOCATION';
export const RECEIVE_CURRENT_LOCATION_SUCCESS = 'RECEIVE_CURRENT_LOCATION_SUCCESS';
export const RECEIVE_CURRENT_LOCATION_ERROR = 'RECEIVE_CURRENT_LOCATION_ERROR';

const requestLocations = actionCreator(REQUEST_LOCATIONS, 'searchVal', 'jqXhr');
const receiveLocations = actionCreator(RECEIVE_LOCATIONS, 'searchVal', 'response');
const getCachedLocations = actionCreator(GET_CACHED_LOCATIONS, 'searchVal');
const clearSearchResults = actionCreator(CLEAR_SEARCH_RESULTS, 'searchVal');
const moveHighlighted = actionCreator(MOVE_HIGHLIGHTED, 'direction');
const mouseHighlight = actionCreator(MOUSE_HIGHLIGHT, 'index');
const receivePlaceName = actionCreator(RECEIVE_PLACE_NAME_DATA, 'addressDisplayName');
const requestCurrentLocation = actionCreator(REQUEST_CURRENT_LOCATION);
const receiveCurrentLocationSuccess = actionCreator(RECEIVE_CURRENT_LOCATION_SUCCESS, 'coordinates');
const receiveCurrentLocationError = actionCreator(RECEIVE_CURRENT_LOCATION_ERROR, 'errMessage');

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
            let addressDisplayName = responseObj.formattedAddressForDisplay;
            setLocalStorageItem(coordinates, JSON.stringify({name : addressDisplayName , url : responseObj.formattedAddressForUrl}));
            dispatch(receivePlaceName(addressDisplayName));
        });
    }
};

const geoLocationSuccess = (location, dispatch) => {
    let coordinates = location.coords.latitude + '_' + location.coords.longitude;
    dispatch(receiveCurrentLocationSuccess(coordinates));
    dispatch(push('/weather/current/' + coordinates));
}

const geoLocationError = (error, dispatch) => {
    dispatch(receiveCurrentLocationError(error.code));
}

const getCurrentLocation = () => {
    return (dispatch, getState) => {
        if(typeof navigator != 'undefined' && navigator.geolocation) {
            dispatch(requestCurrentLocation());
            navigator.geolocation.getCurrentPosition(location => {geoLocationSuccess(location, dispatch)},
                error => {geoLocationError(error, dispatch)}, constants.GEOLOCATION_OPTIONS);
        } else
            return dispatch(receiveCurrentLocationError('error'));
    }
}

export {getLocations, clearSearchResults, moveHighlighted, mouseHighlight, getPlaceName, getCurrentLocation};
