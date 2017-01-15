import 'babel-polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';

import { loadCourses } from './actions/courseActions';
import configureStore from './store/configureStore';
import routes from './routes';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
