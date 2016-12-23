'use strict'

import React from 'react';
import Slider from 'react-slick';

const constants = require('config/constants');

import {ViewedLocation} from 'app/components/Home/Location';
import * as ACTIONS from 'app/actions';

class ViewedLocations extends React.Component {

    handleClear = (e, coordinates) => {
        e.preventDefault();
        this.props.dispatch(ACTIONS.removeViewedLocation(coordinates));
    }

    render() {
        return (
            <div className="recent-locations-container">
                <Slider {...constants.SLIDER_OPTIONS_LOCATIONS}>
                    {this.props.viewedLocations.map((item) =>
                        <div key={item} >
                            <ViewedLocation handleClear={this.handleClear} item={item} />
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

ViewedLocations.propTypes = {
    viewedLocations : React.PropTypes.array,
    dispatch : React.PropTypes.func.isRequired
};

export default ViewedLocations;
