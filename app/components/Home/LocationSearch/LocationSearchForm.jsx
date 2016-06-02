'use strict'

import React from 'react';
const constants = require('config/constants');

import {InputSubmit, AjaxSpinner} from 'app/components/Common';
import {getLocations} from 'app/actions';

class LocationSearchForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            searchVal : ''
        }
    }

    updateState(e) {
        const {dispatch} = this.props;
        let searchVal = e.target.value;
        this.setState({searchVal : searchVal});
        if(searchVal.length >= constants.MIN_SEARCH_LENGTH)
            dispatch(getLocations(searchVal));
    }

    render() {
        return (
            <form action="#" className="find-location">
                <input type="text" placeholder="Find your location..." maxLength="100" value={this.state.searchVal} onChange={e => this.updateState(e)}/>
                <span className="search-loader">{this.props.isLoading ? <AjaxSpinner height="40" /> : ''}</span>
                <InputSubmit value="Find" />
            </form>

        )
    }
}

export default LocationSearchForm;
