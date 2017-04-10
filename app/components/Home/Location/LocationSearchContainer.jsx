'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {LocationSearchForm, LocationSuggestions, ViewedLocations} from 'app/components/Home/Location';
import {ErrorMessage} from 'app/components/Common';
import * as ACTIONS from 'app/actions';
const constants = require('config/constants');

class LocationSearchContainer extends React.Component {

    handleRemoveLocationError = () => {
        const {dispatch} = this.props;
        setTimeout(() => {dispatch(ACTIONS.hideLocationError())}, constants.ERROR_MESSAGE_DISPLAY_TIMEOUT);
    };

    render() {
        const {viewedLocations} = this.props;
        const rViewedLocations = viewedLocations.concat().reverse();

        return (
            <div className="hero">
                {this.props.currentLocationError ? <ErrorMessage msg={constants.CURRENT_LOCATION_ERROR}
                    mountFunction={this.handleRemoveLocationError} /> : ''}
                <div className="container search-container">
                    {viewedLocations.length > 0 ? <ViewedLocations {...this.props} viewedLocations={rViewedLocations} /> : ''}
                    <LocationSearchForm {...this.props} />
                    <LocationSuggestions {...this.props} />
                </div>
            </div>
        )
    }
}

if(process.env.NODE_ENV !== 'production') {
    LocationSearchContainer.propTypes = {
        isLoading : PropTypes.bool.isRequired,
        locationsList : PropTypes.array,
        searchTermLength : PropTypes.number,
        searchVal : PropTypes.string,
        currentSuggestionIndex : PropTypes.number,
        selectedLocation : PropTypes.object,
        currentUnit : PropTypes.string,
        viewedLocations : PropTypes.array,
        currentLocationError : PropTypes.bool,
        dispatch : PropTypes.func.isRequired
    };
}

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
