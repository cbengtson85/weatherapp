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
}


export {slideToggle, actionCreator};
