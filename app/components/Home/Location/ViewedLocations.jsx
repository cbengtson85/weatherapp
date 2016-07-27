'use strict'

import React from 'react';

import {UnitSelector} from 'app/components/Home/Location';
import {Link} from 'react-router';
const Slider = require('react-slick');
const constants = require('config/constants');

import {getLocalStorageItem} from 'app/functions';
import {ClearIcon} from 'app/components/Common';
import * as ACTIONS from 'app/actions';

const ViewedLocations = ({viewedLocations, dispatch}) => {
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

    let settings = constants.SLIDER_OPTIONS;

    return (
        <div className="recent-locations-container">
            <Slider {...settings}>
                {viewedLocations.map((item, index) => {
                        let obj = getStorageItem(item);
                        let name = obj.name != '' ? obj.name : '';
                        return (
                            <div key={item}>
                                <Link  to={obj.url}>
                                    {name}<span onClick={e => handleClear(e, item)}><ClearIcon height="20" /></span>
                                </Link>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
};

export default ViewedLocations;
