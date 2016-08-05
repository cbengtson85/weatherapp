'use strict'

import React from 'react';

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

export default ErrorMessage;
