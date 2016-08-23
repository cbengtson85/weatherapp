'use strict'

import React from 'react';

const CurrentLocationIcon = ({height, cssClass}) => {
    return (
        <img src="/img/current-location.png" height={height} className={cssClass} />
    )
};

CurrentLocationIcon.propTypes = {
    height : React.PropTypes.string,
    cssClass : React.PropTypes.string
};

export default CurrentLocationIcon;
