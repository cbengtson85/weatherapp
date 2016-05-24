'use strict'

import React from 'react';
import {MenuItem} from 'app/components/Header/Menu'

class MenuItems extends React.Component {
    render() {
        return (
            <ul className="menu">
                {this.props.menuLinks.map((item, index) =>
                    <MenuItem key={index} item={item} {...this.props} />
                )}
            </ul>
        )
    }
}

MenuItems.propTypes = {
    menuLinks : React.PropTypes.array
};

MenuItems.defaultProps = {
    menuLinks : [{name : 'Home', link : '/'}, {name : 'News', link : '/news'},
                {name : 'Cameras', link : '/cameras'}, {name : 'Photos', link : '/photos'},
                {name : 'Contact', link : '/contact'}]
};

export default MenuItems;
