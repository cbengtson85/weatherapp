'use strict'

import React from 'react';
import PropTypes from 'prop-types';

class ErrorMessage extends React.PureComponent {
    componentDidMount() {
        if(this.props.mountFunction != undefined)
            this.props.mountFunction();
    }
    render() {
        return (
            <div className="error-message">
                {this.props.msg}
            </div>
        )
    }
}

if(process.env.NODE_ENV !== 'production') {
    ErrorMessage.propTypes = {
        mountFunction : PropTypes.func,
        msg : PropTypes.string
    };
}

export default ErrorMessage;
