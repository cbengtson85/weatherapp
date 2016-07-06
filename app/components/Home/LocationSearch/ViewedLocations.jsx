'use strict'

import React from 'react';

import {UnitSelector} from 'app/components/Home/LocationSearch';
import {Link} from 'react-router';

import {getLocalStorageItem} from 'app/functions';
import {ClearIcon} from 'app/components/Common';
import * as ACTIONS from 'app/actions';

const UnitSelectors = ({viewedLocations, dispatch}) => {
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

    const handleClear = (e, coordinates) => {
        e.preventDefault();
        dispatch(ACTIONS.removeViewedLocation(coordinates));
    }

    return (
        <div className="recent-locations-container">
            {viewedLocations.map((item, index) => {
                    let obj = getStorageItem(item);console.log(obj);
                    if(obj.name != '') {
                        return (
                            <Link key={item} to={obj.url}>{obj.name}<span onClick={e => handleClear(e, item)}><ClearIcon height="20" /></span></Link>
                        )
                    }
                }
            )}
        </div>
    )
};

export default UnitSelectors;
