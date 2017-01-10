// Traditionally the rootReducer is called index
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({            // Inside here we define the reducers we want to combine
    courses,
    authors,                                     // courses: courses   ES6 shorthand property
    ajaxCallsInProgress
});

export default rootReducer;