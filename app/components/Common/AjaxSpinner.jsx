'use strict'

import React from 'react';

const AjaxSpinner = ({height, cssClass}) => {
    return (
        <img src="/img/ajax-loader.gif" height={height} className={cssClass} />
    )
};

export default AjaxSpinner;
