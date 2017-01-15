import { LOAD_COURSES_SUCCESS } from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function onLoadCoursesSuccess(courses) {
    return { type: LOAD_COURSES_SUCCESS, payload: courses };
}

export function loadCourses() {
    return dispatch => {
        return courseApi.getAllCourses()
            .then(courses => dispatch(onLoadCoursesSuccess(courses)))
            .catch(error => { throw error; });
    };
}
