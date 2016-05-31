'use strict'

const constants = require('config/constants');

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const UPDATE_XHR = 'UPDATE_XHR';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

const requestLocations = searchVal => {
    return {
        type : REQUEST_LOCATIONS,
        searchVal
    }
};

const receiveLocations = (searchVal, response) => {
    return {
        type : RECEIVE_LOCATIONS,
        searchVal,
        response
    }
};

const updateXhr = (jqXhr) => {
    return {
        type : UPDATE_XHR,
        jqXhr
    }
};

const locationsRequest = (state, searchVal) => {
    return dispatch => {
        let jqXhr = $.ajax({
            type : 'get',
            url : constants.LOCATION_SEARCH_ENDPOINT + encodeURI(searchVal),
        }).done(function(responseObj) {
            dispatch(receiveLocations(searchVal, responseObj));
        }).fail(function(x,y,z) {
            dispatch(receiveLocations(searchVal, constants.LOCATION_RESPONSE_FORMAT));
        });
        dispatch(updateXhr(jqXhr));
    }
};

const getLocations = searchVal => {
    //ABORT REQUEST
    return (dispatch, getState) => {
        return dispatch(locationsRequest(getState(), searchVal));
    }
};

export {getLocations};
