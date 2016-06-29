'use strict'

import {actionCreator} from 'app/functions';
const constants = require('config/constants');

//units action creator

export const REQUEST_WEATHER= 'REQUEST_WEATHER';
export const RECEIVE_WEATHER= 'RECEIVE_WEATHER';

const requestWeather = actionCreator(REQUEST_WEATHER, 'coordinates');
const receiveWeather = actionCreator(RECEIVE_WEATHER, 'coordinates', 'response');

const weatherRequest = (state, coordinates) => {
    return dispatch => {
        $.ajax({
            type : 'get',
            url : constants.WEATHER_DATA_ENDPOINT + encodeURI(coordinates) + '?units=us',
            beforeSend : function() {
                dispatch(requestWeather(coordinates));
            }
        }).done(function(responseObj) {
            if(responseObj.current == null) {
                dispatch(receiveWeather(coordinates, constants.WEATHER_RESPONSE_FORMAT));
            } else {
                dispatch(receiveWeather(coordinates, responseObj));
            }
        }).fail(function(x,y,z) {
            dispatch(receiveWeather(coordinates, constants.WEATHER_RESPONSE_FORMAT));
        });
    }
};

const getWeatherData = coordinates => {
    return (dispatch, getState) => {
        return dispatch(weatherRequest(getState(), coordinates));
    }
};

export {getWeatherData};
