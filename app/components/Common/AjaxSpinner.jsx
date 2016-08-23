'use strict'

import React from 'react';

const AjaxSpinner = ({height, cssClass}) => {
    return (
        <img src="/img/ajax-loader.gif" height={height} className={cssClass} />
    )
};

AjaxSpinner.propTypes = {
    height : React.PropTypes.string,
    cssClass : React.PropTypes.string
};

export default AjaxSpinner;
