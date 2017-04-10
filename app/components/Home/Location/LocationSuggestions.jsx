'use strict'

import React from 'react';
import PropTypes from 'prop-types';

import {mouseHighlight} from 'app/actions';
import {CurrentLocationItem, LocationSuggestion} from 'app/components/Home/Location';

class LocationSuggestions extends React.Component {

    handleSuggestionHover = index => {
        this.props.dispatch(mouseHighlight(index));
    };

    render() {
        const {dispatch, locationsList, currentSuggestionIndex} = this.props;
        const lList = locationsList == undefined ? [] : locationsList;
        return (
            <div className="location-suggestions-container">
                <div className="location-suggestions">
                    <ul className="location-suggestions-list">
                        {locationsList == undefined ? <CurrentLocationItem dispatch={dispatch} /> : ''}
                        {lList.map((location, index) =>
                            <LocationSuggestion handleSuggestionHover={this.handleSuggestionHover} key={location.id} location={location}
                                index={index} currentSuggestionIndex={currentSuggestionIndex} />
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

if(process.env.NODE_ENV !== 'production') {
    LocationSuggestions.propTypes = {
        locationsList : PropTypes.array,
        currentSuggestionIndex : PropTypes.number,
        dispatch : PropTypes.func.isRequired
    };
}

export default LocationSuggestions;
