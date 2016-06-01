'use strict'

import React from 'react';

import {Provider} from 'react-redux';
import {configureStore} from 'app/store';
import Home from 'app/components/Home/Home.jsx';

const store = configureStore(/*initialState*/);

class HomeRootContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
};

export default HomeRootContainer;
