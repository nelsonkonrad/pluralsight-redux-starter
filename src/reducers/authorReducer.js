import * as authorActions from '../actions/authorActions';
import initialState from '../constants/initialState';

export default function authorReducer(state = initialState.authors, action) {
    switch(action.type) {
        case authorActions.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}