'use strict'

const constants = require('config/constants');

const actionCreator = (type, ...argNames) => {
    return function(...args) {
        let action = {
            type
        }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
};

const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch(e) {
        console.error(e);
    }
}

const getLocalStorageItem = key => {
    try {
        return localStorage.getItem(key);
    } catch(e) {
        console.error(e);
    }
}

const getObjectFromStorage = key => {
    let sItem = getLocalStorageItem(key);
    if(sItem != undefined) {
        sItem = JSON.parse(sItem);
    }
    return sItem;
}

const getNameFromStorage = key => {
    let obj = getObjectFromStorage(key);
    let name = '';
    if(obj != undefined) {
        name = obj.name;
    }
    return name;
}


const getUnitFromStorage = () => {
    let unit = 'F'
    try {
        unit = getLocalStorageItem('unit');
        if(unit == null || unit == undefined || unit == '')
            return 'F';
        else {
            return unit;
        }
    } catch(e) {
        return unit;
    }
}

const getViewedLocations = () => {
    let locations = getLocalStorageItem(constants.VIEWED_LOCATIONS);
    if(locations == undefined || locations == '')
        return [];
    return locations.split(',');
}

export {actionCreator, getUnitFromStorage, setLocalStorageItem, getLocalStorageItem,
    getNameFromStorage, getViewedLocations, getObjectFromStorage};
