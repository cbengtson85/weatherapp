'use strict'

const axios = require('axios');
const config = require('config');
const constants = require('config/constants');
const transformLocation = require('server/tools').transformLocation;
const logLocationApiRequest = require('server/tools').logApiRequests.logLocationApiRequest;

const axiosInstance = axios.create({timeout : config.locationServiceTimeout});

let sendLocationsListSuccess = (response, res, type) => {
    res.json(transformLocation(response.data, type));
};

let sendLocationsListError = (response, res) => {
    console.log('LOCATION API ERROR');
    console.log(response);
    res.json({sucess : false, response : response});
};

let isCanadaPostalCode = postal => {
    var regex = new RegExp(/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/);
    if(regex.test(postal))
        return true;
    else
        return false;
};

let buildSearchEndpoint = q => {
    return config.locationServiceEndpoint + '?' + constants.Q + '=' + q + '&' + constants.MAX_ROWS + '=' +
        config.locationServiceMaxResults + '&' + constants.USER_NAME + '=' + config.locationServiceKey +
        '&' + constants.FUZZY + '=' + constants.FUZZY_VALUE + '&' + constants.COUNTRY_BIAS + '=' + 'US';
};

let buildPostalCodeEndpoint = (q, isCanada) => {
    let searchParamVal = constants.POSTAL_CODE_STARTSWITH + '=' + q;
    if(isCanada)
        searchParamVal = constants.POSTAL_CODE + '=' + q;

    return config.locationServicePostalCodeEndpoint + '?' + searchParamVal + '&' + constants.MAX_ROWS + '=' +
        config.locationServiceMaxResults + '&' + constants.USER_NAME + '=' + config.locationServiceKey;
};

let isEmptyResponse = locationResponse => {
    if(typeof locationResponse == 'undefined' || !Object.keys(locationResponse).length)
        return true;
    if(typeof locationResponse.geonames != 'undefined' && locationResponse.geonames.length > 0)
        return false;
    if(typeof locationResponse.postalCodes != 'undefined' && locationResponse.postalCodes.length > 0)
        return false;

    return true;
};

let makeLocationPostalCodeRequest = (req, res, endpoint, q, stop) => {
    logLocationApiRequest();
    axiosInstance.get(endpoint)
        .then(response => {
            if(isEmptyResponse(response.data) && !stop)
                makeLocationSearchRequest(req, res, buildSearchEndpoint(q), q, true);
            else
                sendLocationsListSuccess(response, res, constants.POSTAL);
        })
        .catch(response => {
            sendLocationsListError(response, res);
        });
};

let makeLocationSearchRequest = (req, res, endpoint, q, stop) => {
    logLocationApiRequest();
    axiosInstance.get(endpoint)
        .then(response => {
            if(isEmptyResponse(response.data) && !stop)
                makeLocationPostalCodeRequest(req, res, buildPostalCodeEndpoint(q, false), q, true);
            else
                sendLocationsListSuccess(response, res, constants.SEARCH);
        })
        .catch(response => {
            sendLocationsListError(response, res);
        });
}

let makeLocationRequest = (req, res, q) => {
    let qLength = q.length;
    if(!isNaN(q)) {
        makeLocationPostalCodeRequest(req, res, buildPostalCodeEndpoint(q, false), q);
    } else if(qLength >= 6 && qLength <= 7 && isCanadaPostalCode(q)) {
        makeLocationPostalCodeRequest(req, res, buildPostalCodeEndpoint(q, true), q);
    } else {
        makeLocationSearchRequest(req, res, buildSearchEndpoint(q), q);
    }

};

exports.getLocationsList = (req, res) => {
    let q = req.params.q;
    if(typeof q == 'undefined')
        q = '';
    q = q.trim();
    makeLocationRequest(req, res, q);
};
