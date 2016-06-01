'use strict'

import React from 'react';
import {InputSubmit, AjaxSpinner} from 'app/components/Common';

class LocationSearchForm extends React.Component  {
    constructor() {
        super();
        this.state = {
            searchVal : ''
        }
    }

    updateState(e) {
        this.setState({searchVal : e.target.value});
    }

    render() {
        return (
            <form action="#" className="find-location">
                <input type="text" placeholder="Find your location..." maxLength="100" value={this.state.searchVal} onChange={e => this.updateState(e)}/>
                <span className="search-loader">{this.props.loading ? <AjaxSpinner height="40" /> : ''}</span>
                <InputSubmit value="Find" />
            </form>
        )
    }
}

export default LocationSearchForm;
