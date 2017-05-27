'use strict'

import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {history} from 'app/functions';

import {configureStore} from 'app/store';
import Home from 'app/components/Home/Home.jsx';

const store = configureStore(/*initialState*/);

class HomeRootContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Home />
                </Router>
            </Provider>
        )
    }
}

export default HomeRootContainer;
