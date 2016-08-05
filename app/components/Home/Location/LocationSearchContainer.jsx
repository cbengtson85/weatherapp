'use strict'

import React from 'react';
import {connect} from 'react-redux';

import {LocationSearchForm, LocationSuggestions, ViewedLocations} from 'app/components/Home/Location';
import {ErrorMessage} from 'app/components/Common';
import * as ACTIONS from 'app/actions';
const constants = require('config/constants');

class LocationSearchContainer extends React.Component {

    handleRemoveLocationError() {
        const {dispatch} = this.props;
        setTimeout(() => {dispatch(ACTIONS.hideLocationError())}, constants.ERROR_MESSAGE_DISPLAY_TIMEOUT);
    }
    render() {
        const {viewedLocations} = this.props;
        const rViewedLocations = viewedLocations.concat().reverse();

        return (
            <div className="hero">
                {this.props.currentLocationError ? <ErrorMessage msg={constants.CURRENT_LOCATION_ERROR}
                    mountFunction={this.handleRemoveLocationError.bind(this)} /> : ''}
                <div className="container search-container">
                    {viewedLocations.length > 0 ? <ViewedLocations {...this.props} viewedLocations={rViewedLocations} /> : ''}
                    <LocationSearchForm {...this.props} />
                    <LocationSuggestions {...this.props} />
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
    currentLocationError : React.PropTypes.bool,
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
    const currentLocationError = locations.currentLocationError;

    return {
        isLoading : loading,
        locationsList : currentLocationList,
        searchTermLength : searchTerm.length,
        searchVal : searchTerm,
        currentSuggestionIndex : currentIndex,
        selectedLocation : selectedLocation,
        currentUnit : weather.currentUnit,
        viewedLocations : weather.viewedLocations,
        currentLocationError : currentLocationError
    }
};

export default connect(mapStateToProps)(LocationSearchContainer);
