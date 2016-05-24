'use strict'

import React from 'react';
import {InputSubmit, AjaxSpinner} from 'app/components/Common';

const LocationSearchForm = () => {
    return (
        <form action="#" className="find-location">
            <input type="text" placeholder="Find your location..." maxLength="100"/>
            <span className="search-loader"><AjaxSpinner height="40"/></span>
            <InputSubmit value="Find" />
        </form>
    )
};

export default LocationSearchForm;
