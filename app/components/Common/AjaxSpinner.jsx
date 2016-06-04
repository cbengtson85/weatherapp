'use strict'

import React from 'react';

const AjaxSpinner = (props) => {
    return (
        <img src="/img/ajax-loader.gif" height={props.height} className="vertical-center" />
    )
};

export default AjaxSpinner;
