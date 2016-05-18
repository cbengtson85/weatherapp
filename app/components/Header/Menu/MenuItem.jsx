'use strict'

import React from 'react';

const MenuItem = (props) => {
    let selected = props.item.name == props.page ? ' current-menu-item' : '';
    return (
        <li className={"menu-item" + selected} key={props.index}><a href={props.item.link}>{props.item.name}</a></li>
    )
}

export default MenuItem;
