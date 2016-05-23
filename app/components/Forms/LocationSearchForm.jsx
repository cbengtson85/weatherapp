'use strict'

import React from 'react';
import {InputSubmit} from 'app/components/Common'

const LocationSearchForm = () => {
    return (
        <form action="#" className="find-location">
            <input type="text" placeholder="Find your location..." maxLength="100"/>
            <InputSubmit value="Find" />
        </form>
    )
}

export default LocationSearchForm;
