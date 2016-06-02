'use strict'

import React from 'react';

import {InputSubmit, AjaxSpinner} from 'app/components/Common';
import {getLocations} from 'app/actions';

class LocationSearchForm extends React.Component  {

    handleChange(e) {
        const {dispatch} = this.props;
        let searchVal = e.target.value;
        dispatch(getLocations(searchVal));
    }

    render() {
        return (
            <form action="#" className="find-location">
                <input type="text" placeholder="Find your location..." maxLength="100" onChange={e => this.handleChange(e)}/>
                <span className="search-loader">{this.props.isLoading ? <AjaxSpinner height="40" /> : ''}</span>
                <InputSubmit value="Find" />
            </form>

        )
    }
}

export default LocationSearchForm;
