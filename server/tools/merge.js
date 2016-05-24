'use strict'
/*
 *
 * Module will merge 2 objects, with the (src) obj overwriting properties that exist in (obj)
 *
*/
module.exports = (obj, src) => {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
};

//rename this to tools if there are multiple functions and make index.js
