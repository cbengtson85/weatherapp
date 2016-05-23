'use strict'

import React from 'react';
import {LocationSearchForm} from 'app/components/Forms'
import {LocationSuggestions} from 'app/components/Home/LocationSearch'

class LocationSearch extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="container search-container">
                    <LocationSearchForm />
                    <LocationSuggestions />
                </div>
            </div>
        )
    }
}

export default LocationSearch;
