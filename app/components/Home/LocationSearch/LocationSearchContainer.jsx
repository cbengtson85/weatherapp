'use strict'

import React from 'react';
import {connect} from 'react-redux';
import {LocationSearchForm, LocationSuggestions} from 'app/components/Home/LocationSearch';

class LocationSearchContainer extends React.Component {
    render() {
        let hasResults = false;
        if(typeof this.props.locationsList != 'undefined' && this.props.locationsList.length > 0)
            hasResults = true;
        return (
            <div className="hero">
                <div className="container search-container">
                    <LocationSearchForm {...this.props} />
                    {hasResults ? <LocationSuggestions locationsList={this.props.locationsList} /> : ''}
                </div>
            </div>
        )
    }
}

LocationSearchContainer.propTypes = {
    isLoading : React.PropTypes.bool.isRequired,
    locationsList : React.PropTypes.array,
    dispatch : React.PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const {locations} = state;
    const searchTerm = locations.currentSearchTerm;
    const loading = locations.loading;
    const locationsList = locations.locationsList;
    return {
        isLoading : loading,
        locationsList : locationsList[searchTerm]
    }
};

export default connect(mapStateToProps)(LocationSearchContainer);
