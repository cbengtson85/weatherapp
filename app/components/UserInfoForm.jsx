'use strict'

import React from 'react';

const UserInfoForm = (props) => {
    return (
        <form action="/submit-user-data" method="POST" id={props.formId} className="form">
            <input type="text" placeholder="First Name" name="firstName" value="craig"/><br />
            <input type="text" placeholder="Last Name" name="lastName" /><br />
            <input type="text" placeholder="Zip Code" name="zipCode" /><br />
            <button type="submit">Save</button>
        </form>
    )
};

UserInfoForm.propTypes = {
    formId : React.PropTypes.string
};

UserInfoForm.defaultProps = {
    formId : 'userFormDefault'
};

export default UserInfoForm;
