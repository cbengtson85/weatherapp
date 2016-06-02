'use strict'

const constants = require('config/constants');

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const GET_CACHED_LOCATIONS = 'GET_CACHED_LOCATIONS';

const requestLocations = (searchVal, jqXhr) => {
    return {
        type : REQUEST_LOCATIONS,
        searchVal,
        jqXhr
    }
};

const receiveLocations = (searchVal, response) => {
    return {
        type : RECEIVE_LOCATIONS,
        searchVal,
        response
    }
};

const getCachedLocations = (searchVal) => {
    return {
        type : GET_CACHED_LOCATIONS,
        searchVal
    }
};

const locationRequestNeeded = (state, searchVal) => {
    if(!state.locations.locationsList[searchVal])
        return true;
    else
        return false;
};

const locationsRequest = (state, searchVal) => {
    return dispatch => {
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

export {getLocations};
