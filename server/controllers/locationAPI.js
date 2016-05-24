'use strict'

const axios = require('axios');
const config = require('config');

let isCanadaPostalCode = postal => {
    var regex = new RegExp(/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/);
    if (regex.test(postal))
        return true;
    else
        return false;
};

let buildSearchEndpoint = q => {
    return config.locationServiceEndpoint + '?q=' + q + '&maxRows=' +
        config.locationServiceMaxResults + '&username=' + config.locationServiceKey;
};

let buildPostalCodeEndpoint = (q, isCanada) => {
    let searchParamVal = 'postalcode_startsWith=' + q;
    if(isCanada)
        searchParamVal = 'postalcode=' + q + '&country=CA';

    return config.locationServicePostalCodeEndpoint + '?' + searchParamVal + '&maxRows=' +
        config.locationServiceMaxResults + '&username=' + config.locationServiceKey;
};


let getEndpoint = q => {
    let qLength = q.length;
    if(!isNaN(q)) {
        console.log('number');
        return buildPostalCodeEndpoint(q, false);
    } else if(qLength >= 6 && qLength <= 7 && isCanadaPostalCode(q)) {
        console.log('canada');
        return buildPostalCodeEndpoint(q, true);
    } else {
        console.log('search');
        return buildSearchEndpoint(q);
    }
};

let transformLocationData = data => {
    return data;
    let getCountry = country => {
        let countrytmp = '';
        if(typeof country != 'undefined' && country.toUpperCase() != 'UNITED STATES')
            countrytmp = ', ' + country;
        else
            countrytmp = '';
        return countrytmp;
    }
    let transformedData = {};
    let success = false;
    let results = [];
    let resourceSet = data.resourceSets[0];
    if(typeof resourceSet.resources != 'undefined' && resourceSet.resources.length > 0) {
        success = true;

        resourceSet.resources.map((resource, index) => {
            let addressName;
            let latitude;
            let longitude;
            if(typeof resource.address.postalCode != 'undefined' && resource.address.postalCode != '') {
                addressName = resource.address.locality + ', ' + resource.address.adminDistrict +
                                getCountry(resource.address.countryRegion);
            } else {
                if(resource.address.formattedAddress == resource.address.countryRegion) {
                    addressName = resource.address.formattedAddress;
                } else {
                    addressName = resource.address.formattedAddress + getCountry(resource.address.countryRegion);;
                }
            }
            longitude = resource.point.coordinates[0];
            latitude = resource.point.coordinates[1];
            results.push({addressName : addressName, longitude : longitude, latitude : latitude});
        });
    }

    transformedData['success'] = success;
    transformedData['results'] = results;
    return transformedData;
};

let sendLocationsListSuccess = (response, res) => {
    res.json(transformLocationData(response.data));
};

let sendLocationsListError = (response, res) => {
    console.log('LOCATION API ERROR');
    console.log(response);
    res.json({sucess : false, response : response});
};

exports.sendLocationsList = (req, res) => {
    let q = req.params.q;
    q = q.trim();
    let endpoint = getEndpoint(q);

    axios.get(endpoint)
        .then(response => {
            sendLocationsListSuccess(response, res);
        })
        .catch(response => {
            sendLocationsListError(response, res);
        });

};
