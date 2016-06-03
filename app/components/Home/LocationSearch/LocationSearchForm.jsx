'use strict'

import React from 'react';

import {InputSubmit, AjaxSpinner, ClearIcon} from 'app/components/Common';
import {getLocations} from 'app/actions';

class LocationSearchForm extends React.Component  {

    handleChange(e) {
        const {dispatch} = this.props;
        let searchVal = e.target.value;
        dispatch(getLocations(searchVal));
    }

    handleSearchKeyUp(e) {
        const moveHighlighted = whichWay => {
            alert(whichWay);
        };
        switch (e.keyCode) {
            //up
            case 38:
                moveHighlighted('up');
                break;
            //down
            case 40:
                moveHighlighted('down');
                break;
            //return
            case 13:
                e.preventDefault();
                alert('submit search');
            //escape
            case 27:
                alert('blur and hide ');
        }
    }

    render() {
        const {dispatch, searchTermLength} = this.props;
        return (
            <form action="#" className="find-location">
                <input onKeyUp={e => this.handleSearchKeyUp(e)} type="text" placeholder="Find your location..." maxLength="100" onChange={e => this.handleChange(e)}/>
                {this.props.isLoading ? <span className="search-loader"><AjaxSpinner height="40" /></span> : ''}
                {this.props.searchTermLength > 0 && !this.props.isLoading ? <a href="#" className="clear-field"><ClearIcon height="30" /></a> : ''}
                <InputSubmit value="Find" />
            </form>

        )
    }
}

export default LocationSearchForm;
