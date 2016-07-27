'use strict'

import React from 'react';
import {Link} from 'react-router';

const constants = require('config/constants');
import {mouseHighlight} from 'app/actions';
import {CurrentLocationItem} from 'app/components/Home/Location';

const LocationSuggestions = ({dispatch, locationsList, currentSuggestionIndex}) => {

    const handleSuggestionHover = index => {
        dispatch(mouseHighlight(index));
    };
    const lList = locationsList == undefined ? [] : locationsList;
    return (
        <div className="location-suggestions-container">
            <div className="location-suggestions">
                <ul className="location-suggestions-list">
                    {locationsList == undefined ? <CurrentLocationItem dispatch={dispatch} /> : ''}
                    {lList.map((location, index) =>
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
