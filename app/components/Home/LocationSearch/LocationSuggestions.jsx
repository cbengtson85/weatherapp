'use strict'

import React from 'react';
import {Link} from 'react-router';

import {mouseHighlight} from 'app/actions';

const LocationSuggestions = ({dispatch, locationsList, currentSuggestionIndex}) => {

    const handleSuggestionHover = index => {
        dispatch(mouseHighlight(index));
    };

    return (
        <div className="location-suggestions-container">
            <div className="location-suggestions">
                <ul className="location-suggestions-list">
                    {locationsList.map((location, index) =>
                        <li key={location.id}>
                            <Link to={location.formattedAddressForUrl} className={index==currentSuggestionIndex ? "suggestion-highlight" : ""}
                                onMouseEnter={() => handleSuggestionHover(index)}>
                                {location.formattedAddressForList}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default LocationSuggestions;
