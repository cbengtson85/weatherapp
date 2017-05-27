'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {ClearIcon} from 'app/components/Common';

import {getObjectFromStorage} from 'app/functions';

const ViewedLocation = ({item, handleClear}) => {
    const clearItem = e => {
        handleClear(e, item);
    };

    const getStorageItem = coordinates => {
        let obj = {name : '', url : ''};
        let sItem = getObjectFromStorage(coordinates);
        if(sItem != undefined) {
            obj.name = sItem.name;
            obj.url = sItem.url;
        }
        return obj;
    }

    let obj = getStorageItem(item);
    let name = obj.name != '' ? obj.name : item;
    return (
        <Link to={obj.url == undefined ? '#' : obj.url}>
            {name}<span onClick={clearItem}><ClearIcon height="20" /></span>
        </Link>
    )
};

if(process.env.NODE_ENV !== 'production') {
    ViewedLocation.propTypes = {
        item : PropTypes.string,
        handleClear : PropTypes.func
    };
}

export default ViewedLocation;
