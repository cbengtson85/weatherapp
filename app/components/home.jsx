'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import UserInfoForm from 'app/components/UserInfoForm';

class Home extends React.Component {
    render() {
        return <UserInfoForm formId="userForm" />
    }
}

export default Home;
