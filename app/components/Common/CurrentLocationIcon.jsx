'use strict'

import React from 'react';
import PropTypes from 'prop-types';

const CurrentLocationIcon = ({height, cssClass}) => {
    return (
        <img src="/img/current-location.png" height={height} className={cssClass} />
    )
};

if(process.env.NODE_ENV !== 'production') {
    CurrentLocationIcon.propTypes = {
        height : PropTypes.string,
        cssClass : PropTypes.string
    };
}

export default CurrentLocationIcon;
