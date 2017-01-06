// Reducer
import * as courseActions from '../actions/courseActions';
import initialState from '../constants/initialState';

export default function courseReducer(state = initialState.courses, action) {
    switch(action.type) {
        case courseActions.LOAD_COURSES_SUCCESS:
            return action.courses;

        case courseActions.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)];

        case courseActions.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),      // Data is immutable, we can't simply change the index in the array.
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}