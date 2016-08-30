'use strict'

import React from 'react';
import {Link} from 'react-router';

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
            <Link to={obj.url}>
                {name}<span onClick={clearItem}><ClearIcon height="20" /></span>
            </Link>
    )
};

ViewedLocation.propTypes = {
    item : React.PropTypes.string,
    handleClear : React.PropTypes.func
};

export default ViewedLocation;
