'use strict'

const slideToggle = selector => {
    $(selector).slideToggle();
};

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
    } catch(e) {}
}

const getLocalStorageItem = key => {
    try {
        return localStorage.getItem(key);
    } catch(e) {}
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


export {slideToggle, actionCreator, getUnitFromStorage, setLocalStorageItem, getLocalStorageItem};
