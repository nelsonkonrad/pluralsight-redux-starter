// This is our entry point
import 'babel-polyfill';                                       // There are some features in ES6 that babel cant transpile. For those you need polyfill.
                                                               // In an application we should import just the feature we need. Not everything.
import React from 'react';
import { render } from 'react-dom';                            // In React.14, react-dom was split off from React
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';                          // Higher-order component that attaches our store to our React container components
import { Router, browserHistory } from 'react-router';         // browserHistory for URLs without hash
import routes from './routes';
import {loadCourses} from './actions/courseActions';           // named import
import {loadAuthors} from './actions/authorActions';           // named import
import './styles/styles.css';                                  // Importing the css. webpack will bundle it                                 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

const store = configureStore();                                // Instance of store. Alternatively we can pass a store state (example: when passed by a server)
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

// line 16: Accepts the store as props