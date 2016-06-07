'use strict'

import React from 'react';
import {mouseHighlight} from 'app/actions';

const LocationSuggestions = (props) => {

    const handleSuggestionHover = index => {
        const {dispatch} = props;
        dispatch(mouseHighlight(index));
    };

    return (
        <div className="location-suggestions-container">
            <div className="location-suggestions">
                <ul className="location-suggestions-list">
                    {props.locationsList.map((location, index) =>
                        <li key={location.id}>
                            <a href="#" className={index==props.currentSuggestionIndex ? "suggestion-highlight" : ""}
                                onMouseEnter={() => handleSuggestionHover(index)} data-longitude={location.longitude} data-latitude={location.latitude}>
                                {location.formattedAddressForList}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default LocationSuggestions;
