'use strict'

import React from 'react';

const SocialLink = (props) => {
    return (
        <a href="#" key={props.index}><i className={"fa fa-" + props.site}></i></a>
    )
}

export default SocialLink;
