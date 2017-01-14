'use strict'

import React from 'react';

const SocialLink = ({site}) => {
    return (
        <a href={site.url} target="_blank"><i className={'fa fa-' + site.name}></i></a>
    )
};

SocialLink.propTypes = {
    site : React.PropTypes.object
};

export default SocialLink;
