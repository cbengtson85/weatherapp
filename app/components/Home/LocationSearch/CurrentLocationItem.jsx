'use strict'

import React from 'react';
import {CurrentLocationIcon} from 'app/components/Common';

const CurrentLocationItem = () => {
    return (
        <li className="use-current-location">
            <a href="#" className="suggestion-highlight">
                <CurrentLocationIcon height="25" cssClass="" />Use My Current Location
            </a>
        </li>
    )
};

export default CurrentLocationItem;
