'use strict'

import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';

import {configureStore} from 'app/store';
import Home from 'app/components/Home/Home.jsx';
import News from 'app/components/News';


const store = configureStore(/*initialState*/);

class HomeRootContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/news" component={News} />
                    <Route path="*" component={Home} />
                </Router>
            </Provider>
        )
    }
};

export default HomeRootContainer;
