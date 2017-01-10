import {createStore, applyMiddleware} from 'redux';                         // applyMiddleware: To add middleware
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// App entry point
const logger = createLogger();
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}