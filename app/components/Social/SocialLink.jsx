'use strict'

import React from 'react';

const SocialLink = ({site}) => {
    return (
        <a href="#"><i className={"fa fa-" + site}></i></a>
    )
};

export default SocialLink;
