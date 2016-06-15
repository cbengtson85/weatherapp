'use strict'

import React from 'react';
import {Link} from 'react-router';

const MenuItem = (props) => {
    let selected = props.item.name == props.page ? 'current-menu-item' : '';
    return (
        <li className="menu-item" key={props.index}>
            <Link className={selected} to={props.item.link}>{props.item.name}</Link>
        </li>
    )
};

export default MenuItem;
