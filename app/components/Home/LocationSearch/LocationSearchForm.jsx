'use strict'

import React from 'react';
import {push} from 'react-router-redux';

import {InputSubmit, AjaxSpinner, ClearIcon} from 'app/components/Common';
import * as ACTIONS from 'app/actions';

class LocationSearchForm extends React.Component  {
    handleSubmit(e) {
        e.preventDefault();
        const {dispatch, selectedLocation} = this.props;
        if(selectedLocation != null)
            dispatch(push(selectedLocation.formattedAddressForUrl));
    }
    handleClear(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(ACTIONS.clearSearchResults(''));
    }

    handleChange(e) {
        const {dispatch} = this.props;
        let searchVal = e.target.value;
        dispatch(ACTIONS.getLocations(searchVal));
    }

    handleSearchKeyUp(e) {
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
        const {searchTermLength} = this.props;
        return (
            <form action="/" className="find-location" onSubmit={e => this.handleSubmit(e)}>
                <input autoComplete="off" onKeyDown={e => this.handleSearchKeyUp(e)}
                    type="text" placeholder="Find your location..." maxLength="100"
                    value={this.props.searchVal} onChange={e => this.handleChange(e)}/>
                {this.props.isLoading ? <span className="search-loader"><AjaxSpinner height="40" /></span> : ''}
                {this.props.searchTermLength > 0 && !this.props.isLoading ?
                    <a href="#" className="clear-field" onClick={e => this.handleClear(e)}><ClearIcon height="20" /></a> : ''}
                <InputSubmit value="Find" />
            </form>

        )
    }
}

export default LocationSearchForm;
