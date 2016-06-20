'use strict'

import React from 'react';
import {Link} from 'react-router';

const MenuItem = ({item, page}) => {
    let selected = item.name == page ? 'current-menu-item' : '';
    return (
        <li className="menu-item">
            <Link className={selected} to={item.link}>{item.name}</Link>
        </li>
    )
};

export default MenuItem;
