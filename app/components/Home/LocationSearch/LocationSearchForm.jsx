'use strict'

import React from 'react';

import {InputSubmit, AjaxSpinner, ClearIcon} from 'app/components/Common';
import {getLocations, returnNoResults} from 'app/actions';

class LocationSearchForm extends React.Component  {

    handleClear(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(returnNoResults(''));
    }

    handleChange(e) {
        const {dispatch} = this.props;
        let searchVal = e.target.value;
        dispatch(getLocations(searchVal));
    }

    handleSearchKeyUp(e) {
        const {dispatch, searchTermLength} = this.props;

        switch (e.keyCode) {
            //up
            case 38:

                break;
            //down
            case 40:

                break;
            //return
            case 13:
                e.preventDefault();
                alert('submit search');
            //escape
            case 27:
                if(searchTermLength > 0)
                    dispatch(returnNoResults(''));
        }
    }

    render() {
        const {dispatch, searchTermLength} = this.props;
        return (
            <form action="#" className="find-location">
                <input autoComplete="off" onKeyUp={e => this.handleSearchKeyUp(e)}
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
