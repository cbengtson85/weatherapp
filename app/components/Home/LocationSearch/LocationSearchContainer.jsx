'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {LocationSearchForm, LocationSuggestions, ViewedLocations} from 'app/components/Home/LocationSearch';

class LocationSearchContainer extends React.Component {
    render() {
        let hasResults = false;
        const {locationsList, viewedLocations} = this.props;
        if(typeof locationsList != 'undefined' && locationsList.length > 0)
            hasResults = true;
        const rViewedLocations = viewedLocations.concat().reverse();

        return (
            <div className="hero">
                <div className="container search-container">
                    {viewedLocations.length > 0 ? <ViewedLocations {...this.props} viewedLocations={rViewedLocations} /> : ''}
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
    viewedLocations : React.PropTypes.array,
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
        currentUnit : weather.currentUnit,
        viewedLocations : weather.viewedLocations
    }
};

export default connect(mapStateToProps)(LocationSearchContainer);
