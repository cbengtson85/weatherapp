'use strict'

import React from 'react';

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

LocationSuggestions.propTypes = {
    locationsList : React.PropTypes.array,
    currentSuggestionIndex : React.PropTypes.number,
    dispatch : React.PropTypes.func.isRequired
};

export default LocationSuggestions;
