'use strict'

import axios from 'axios';

import {actionCreator} from 'app/functions';
const constants = require('config/constants');

export const REQUEST_WEATHER= 'REQUEST_WEATHER';
export const RECEIVE_WEATHER= 'RECEIVE_WEATHER';
export const SELECT_UNIT = 'SELECT_UNIT';
export const REMOVE_VIEWED_LOCATION = 'REMOVE_VIEWED_LOCATION';
export const SHOW_HOURLY_FORECAST= 'SHOW_HOURLY_FORECAST';

const requestWeather = actionCreator(REQUEST_WEATHER, 'coordinates', 'unit');
const receiveWeather = actionCreator(RECEIVE_WEATHER, 'coordinates', 'response');
const selectUnitAction = actionCreator(SELECT_UNIT, 'unit');
const removeViewedLocation = actionCreator(REMOVE_VIEWED_LOCATION, 'coordinates');
const showHourlyForecast = actionCreator(SHOW_HOURLY_FORECAST, 'showHourly');

const weatherRequest = (state, coordinates, unit) => {
    return dispatch => {
        dispatch(requestWeather(coordinates, unit));
        axios.get(constants.WEATHER_DATA_ENDPOINT + encodeURI(coordinates) + '?units=' + unit)
            .then(response => {
                let responseObj = response.data;
                if(responseObj.current == null) {
                    dispatch(receiveWeather(coordinates, constants.WEATHER_RESPONSE_FORMAT));
                } else {
                    dispatch(receiveWeather(coordinates, responseObj));
                }
            }).catch(() => {
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

export {getWeatherData, selectUnit, selectUnitAction, removeViewedLocation, showHourlyForecast};
