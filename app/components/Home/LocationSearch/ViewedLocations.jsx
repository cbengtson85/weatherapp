'use strict'

import React from 'react';

import {UnitSelector} from 'app/components/Home/LocationSearch';
import {Link} from 'react-router';

import {getLocalStorageItem} from 'app/functions';

const UnitSelectors = ({viewedLocations}) => {
    const getStorageItem = item => {
        let obj = {name : '', url : ''};
        let sItem = getLocalStorageItem(item);
        if(sItem != undefined) {
            sItem = JSON.parse(sItem);
            obj.name = sItem.name;
            obj.url = sItem.url;
        }
        return obj;
    }
    return (
        <div className="recent-locations-container">
            {viewedLocations.map((item, index) => {
                    let obj = getStorageItem(item);
                    return <Link key={item} to={obj.url}>{obj.name}</Link>;
                }
            )}
        </div>
    )
};

export default UnitSelectors;
