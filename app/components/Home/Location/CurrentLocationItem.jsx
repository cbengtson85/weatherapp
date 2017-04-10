'use strict'

import React from 'react';
import PropTypes from 'prop-types';

import {CurrentLocationIcon} from 'app/components/Common';
import * as ACTIONS from 'app/actions';

const CurrentLocationItem = ({dispatch}) => {
    const handleUseCurrentLocation = e => {
        e.preventDefault();
        dispatch(ACTIONS.getCurrentLocation());
    }
    return (
        <li className="use-current-location">
            <a href="#" onClick={handleUseCurrentLocation}>
                <CurrentLocationIcon height="25" cssClass="" /> Use My Current Location
            </a>
        </li>
    )
};

if(process.env.NODE_ENV !== 'production') {
    CurrentLocationItem.propTypes = {
        dispatch : PropTypes.func.isRequired
    };
}

export default CurrentLocationItem;
