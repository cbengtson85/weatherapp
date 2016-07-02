'use strict'

import {actionCreator} from 'app/functions';
const constants = require('config/constants');

//units action creator

export const REQUEST_WEATHER= 'REQUEST_WEATHER';
export const RECEIVE_WEATHER= 'RECEIVE_WEATHER';
export const SELECT_UNIT = 'SELECT_UNIT';

const requestWeather = actionCreator(REQUEST_WEATHER, 'coordinates', 'unit');
const receiveWeather = actionCreator(RECEIVE_WEATHER, 'coordinates', 'response');
const selectUnitAction = actionCreator(SELECT_UNIT, 'unit');


const weatherRequest = (state, coordinates, unit) => {
    return dispatch => {
        $.ajax({
            type : 'get',
            url : constants.WEATHER_DATA_ENDPOINT + encodeURI(coordinates) + '?units=' + unit,
            beforeSend : function() {
                dispatch(requestWeather(coordinates, unit));
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

const getWeatherData = (coordinates, unit) => {
    return (dispatch, getState) => {
        return dispatch(weatherRequest(getState(), coordinates, unit));
    }
};

const selectUnit = unit => {
    return (dispatch, getState) => {
        const state = getState();
        if(state.weather.currentWeatherCoordinates != undefined && state.weather.currentWeatherCoordinates != '')
            return dispatch(getWeatherData(state.weather.currentWeatherCoordinates, unit));
        else
            return dispatch(selectUnitAction(unit));
    }
}

export {getWeatherData, selectUnit, selectUnitAction};
