'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {LocationSearchForm, LocationSuggestions} from 'app/components/Home/LocationSearch';

class LocationSearchContainer extends React.Component {
    render() {
        let hasResults = false;
        const {locationsList} = this.props;
        if(typeof locationsList != 'undefined' && locationsList.length > 0)
            hasResults = true;

        return (
            <div className="hero">
                <div className="container search-container">
                    <LocationSearchForm {...this.props} />
                    {hasResults ? <LocationSuggestions {...this.props} /> : ''}
                </div>
            </div>
        )
    }
}

LocationSearchContainer.propTypes = {
    isLoading : React.PropTypes.bool.isRequired,
    locationsList : React.PropTypes.array,
    searchTermLength : React.PropTypes.number,
    searchVal : React.PropTypes.string,
    currentSuggestionIndex : React.PropTypes.number,
    selectedLocation : React.PropTypes.object,
    currentUnit : React.PropTypes.string,
    dispatch : React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const {locations, weather} = state;
    const searchTerm = locations.currentSearchTerm;
    const loading = locations.loading;
    const locationsList = locations.locationsList;
    const currentLocationList = locationsList[searchTerm];
    const currentIndex = locations.currentSuggestionIndex;
    const selectedLocation = locations.selectedLocation;

    return {
        isLoading : loading,
        locationsList : currentLocationList,
        searchTermLength : searchTerm.length,
        searchVal : searchTerm,
        currentSuggestionIndex : currentIndex,
        selectedLocation : selectedLocation,
        currentUnit : weather.currentUnit
    }
};

export default connect(mapStateToProps)(LocationSearchContainer);
