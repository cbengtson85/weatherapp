'use strict'

import React from 'react';
import {CurrentLocationIcon} from 'app/components/Common';
import * as ACTIONS from 'app/actions';

const CurrentLocationItem = ({dispatch}) => {
    const handleUseCurrentLocation = e => {
        e.preventDefault();
        dispatch(ACTIONS.getCurrentLocation());
    }
    return (
        <li className="use-current-location">
            <a href="#" onClick={e => handleUseCurrentLocation(e)}>
                <CurrentLocationIcon height="25" cssClass="" /> Use My Current Location
            </a>
        </li>
    )
};

export default CurrentLocationItem;
