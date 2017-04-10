'use strict'

import React from 'react';
import PropTypes from 'prop-types';

const AjaxSpinner = ({height, cssClass}) => {
    return (
        <img src="/img/ajax-loader.gif" height={height} className={cssClass} />
    )
};

if(process.env.NODE_ENV !== 'production') {
    AjaxSpinner.propTypes = {
        height : PropTypes.string,
        cssClass : PropTypes.string
    };
}

export default AjaxSpinner;
