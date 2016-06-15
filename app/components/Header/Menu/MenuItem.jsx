'use strict'

import React from 'react';
import {Link} from 'react-router';

const MenuItem = (props) => {
    return (
        <li className="menu-item" key={props.index}>
            <Link activeClassName="current-menu-item" to={props.item.link}>{props.item.name}</Link>
        </li>
    )
};

export default MenuItem;
