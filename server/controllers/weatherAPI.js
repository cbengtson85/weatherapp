'use strict'

const axios = require('axios');
const config = require('config');
const constants = require('config/constants');
const transformWeather = require('server/transform').transformWeather;
const logWeatherApiRequest = require('server/tools').logApiRequests.logWeatherApiRequest;

const axiosInstance = axios.create({timeout : config.weatherServiceTimeout});

const sendWeatherDataSuccess = (response, res, units) => {
    res.json(transformWeather(response.data, units));
};

const sendWeatherDataError = (response, res) => {
    console.log('WEATHER API ERROR');
    console.log(response);
    res.json(constants.WEATHER_RESPONSE_FORMAT);
};

const buildWeatherEndpoint = (lat, long, units) => {
    let unit = units;
    if(typeof units == 'undefined' || units == '')
        unit = 'us';
    else if(units == 'F')
        unit = 'us';
    else {
        unit = 'ca';
    }

    return config.weatherServiceEndpoint + config.weatherServiceKey + '/' + lat + ',' + long + '?units='
        + unit + '&exclude=minutely,flags';
};

const makeWeatherRequest = (req, res, q, units) => {
    //sendweathererror if q is not valid
    const location = q.split('_');
    if(location.length < 2)
        sendWeatherDataError({}, res);
    const latitude = location[0];
    const longitude = location[1];
    logWeatherApiRequest();
    axiosInstance.get(buildWeatherEndpoint(latitude, longitude, units))
        .then(response => {
            sendWeatherDataSuccess(response, res, units);
        })
        .catch(response => {
            sendWeatherDataError(response,res);
        });
};

exports.getWeatherData = (req, res) => {
    let q = req.params.q;
    if(typeof q == 'undefined')
        q = '';
    q = q.trim();
    let units = req.query.units;
    makeWeatherRequest(req, res, q, units);
};
