'use strict'

import React from 'react';
import PropTypes from 'prop-types';

const SocialLink = ({site}) => {
    return (
        <a href={site.url} target="_blank"><i className={'fa fa-' + site.name}></i></a>
    )
};

if(process.env.NODE_ENV !== 'production') {
    SocialLink.propTypes = {
        site : PropTypes.object
    };
}

export default SocialLink;
