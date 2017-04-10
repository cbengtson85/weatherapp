'use strict'

import React from 'react';
import PropTypes from 'prop-types';

const ClearIcon = ({height, cssClass}) => {
    return (
        <img src="/img/clear-x.png" height={height} className={cssClass} />
    )
};

if(process.env.NODE_ENV !== 'production') {
    ClearIcon.propTypes = {
        height : PropTypes.string,
        cssClass : PropTypes.string
    };
}

export default ClearIcon;
