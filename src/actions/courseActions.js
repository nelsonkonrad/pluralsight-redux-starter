import CourseApi from '../api/mockCourseAPI';

export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const CREATE_COURSE_SUCCESS = 'CREATE_COURSE_SUCCESS';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';

export function loadCoursesSuccess(courses) {
    return { type: LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
    return { type: CREATE_COURSE_SUCCESS, course };

}
export function updateCourseSuccess(course) {
    return { type: UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {                                  // thunk
    return dispatch => {
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveCourse(course) {
    return (dispatch, getState) => {                                    // getState: When you want to access the Redux store and get a particular piece of state
        return CourseApi.saveCourse(course).then(savedCourse => {
            debugger;
            course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw(error);
        });
    };
}