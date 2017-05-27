'use strict'

import React from 'react';
import PropTypes from 'prop-types';
import {history} from 'app/functions';

import {InputSubmit, AjaxSpinner, ClearIcon} from 'app/components/Common';
import {UnitSelectors} from 'app/components/Home/Location';
import * as ACTIONS from 'app/actions';

class LocationSearchForm extends React.Component  {
    handleSubmit = e => {
        e.preventDefault();
        const {selectedLocation} = this.props;
        if(selectedLocation != null)
            history.push(selectedLocation.formattedAddressForUrl);
    }
    handleClear = e => {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(ACTIONS.clearSearchResults(''));
        document.getElementById('search-input').focus();
    }

    handleChange = e => {
        const {dispatch} = this.props;
        let searchVal = e.target.value;
        dispatch(ACTIONS.getLocations(searchVal));
    }

    handleSearchKeyUp = e => {
        const {dispatch, searchTermLength, currentSuggestionIndex, locationsList} = this.props;

        switch (e.keyCode) {
            //up
            case 38:
                e.preventDefault();
                if(currentSuggestionIndex != 0)
                    dispatch(ACTIONS.moveHighlighted('up'));
                break;
            //down
            case 40:
                e.preventDefault();
                if(locationsList != undefined && currentSuggestionIndex != locationsList.length -1)
                    dispatch(ACTIONS.moveHighlighted('down'));
                break;
            //escape
            case 27:
                if(searchTermLength > 0)
                    dispatch(ACTIONS.clearSearchResults(''));
                break;
        }
    }

    render() {
        return (
            <form action="/" className="find-location" onSubmit={this.handleSubmit}>
                <input id="search-input" autoComplete="off" autoFocus onKeyDown={this.handleSearchKeyUp}
                    type="text" placeholder="Find a location..." maxLength="100"
                    value={this.props.searchVal} onChange={this.handleChange}/>
                {this.props.isLoading ? <span className="search-loader"><AjaxSpinner height="40" cssClass="vertical-center" /></span> : ''}
                {this.props.searchTermLength > 0 && !this.props.isLoading ?
                    <a href="#" className="clear-field" onClick={this.handleClear}><ClearIcon height="20" cssClass="vertical-center" /></a> : ''}

                <UnitSelectors {...this.props} />
                <InputSubmit value="Find" />
            </form>

        )
    }
}

if(process.env.NODE_ENV !== 'production') {
    LocationSearchForm.propTypes = {
        selectedLocation : PropTypes.object,
        searchTermLength : PropTypes.number,
        currentSuggestionIndex : PropTypes.number,
        locationsList : PropTypes.array,
        searchVal : PropTypes.string,
        isLoading : PropTypes.bool.isRequired,
        dispatch : PropTypes.func.isRequired
    };
}

export default LocationSearchForm;
