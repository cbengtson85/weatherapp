'use strict'

import React from 'react';

const ClearIcon = ({height, cssClass}) => {
    return (
        <img src="/img/clear-x.png" height={height} className={cssClass} />
    )
};

ClearIcon.propTypes = {
    height : React.PropTypes.string,
    cssClass : React.PropTypes.string
};

export default ClearIcon;
