'use strict'

const axios = require('axios');
const config = require('config');
const constants = require('config/constants');
const transformPlaceName = require('server/transform').transformPlaceName;
const logLocationApiRequest = require('server/tools').logApiRequests.logLocationApiRequest;

const axiosInstance = axios.create({timeout : config.placeNameServiceTimeout});

const sendPlaceNameDataSuccess = (response, res, q) => {
    res.json(transformPlaceName(response.data, q));
};

const sendPlaceNameDataError = (response, res) => {
    console.log('PLACE NAME API ERROR');
    console.log(response);
    res.json(constants.PLACE_NAME_RESPONSE_FORMAT);
};

const buildPlaceNameEndpoint = (lat, lng) => {
    return config.placeNameServiceEndpoint + '?' + constants.LATITUDE + '=' + lat + '&' + constants.LONGITUDE + '=' +
        lng + '&' + constants.USER_NAME + '=' + config.placeNameServiceKey +
        '&' + constants.STYLE + '=' + constants.STYLE_VALUE;
};

const makePlaceNameRequest = (req, res, q) => {
    const location = q.split('_');
    if(location.length < 2)
        sendPlaceNameDataError({}, res);
    const latitude = location[0];
    const longitude = location[1];

    logLocationApiRequest();
    axiosInstance.get(buildPlaceNameEndpoint(latitude, longitude))
        .then(response => {
            sendPlaceNameDataSuccess(response, res, q);
        })
        .catch(response => {
            sendPlaceNameDataError(response, res);
        });

};

exports.getPlaceNameData = (req, res) => {
    let q = req.params.q;
    if(typeof q == 'undefined')
        q = '';
    q = q.trim();
    makePlaceNameRequest(req, res, q);
};
