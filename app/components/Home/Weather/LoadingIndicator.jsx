'use strict'

import React from 'react';
import {AjaxSpinner} from 'app/components/Common';

const LoadingIndicator = () => {
    return (
        <div className="weather-loading">
            <AjaxSpinner height="100" cssClass="vertical-center horizontal-center" />
        </div>
    )
};

export default LoadingIndicator;
