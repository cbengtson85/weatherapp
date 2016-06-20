'use strict'

import React from 'react';

const AjaxSpinner = ({height}) => {
    return (
        <img src="/img/ajax-loader.gif" height={height} className="vertical-center" />
    )
};

export default AjaxSpinner;
