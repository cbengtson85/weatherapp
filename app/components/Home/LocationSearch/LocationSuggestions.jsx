'use strict'

import React from 'react';
import {Link} from 'react-router';

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
                            <Link to={"/weather/" + location.formattedAddressForUrl + "/" + location.longitude + "_" + location.latitude} className={index==props.currentSuggestionIndex ? "suggestion-highlight" : ""}
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
