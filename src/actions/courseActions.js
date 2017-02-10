import courseApi from '../api/mockCourseApi';
import {
    CREATE_COURSE_SUCCESS,
    LOAD_COURSES_SUCCESS,
    UPDATE_COURSE_SUCCESS
} from './actionTypes';

function onSaveCourse(dispatch, course) {
    return course.id ?
        dispatch(onUpdateCourseSuccess(course)) :
        dispatch(onCreateCourseSuccess(course));
}

export function onLoadCoursesSuccess(courses) {
    return { type: LOAD_COURSES_SUCCESS, payload: courses };
}

export function onCreateCourseSuccess(course) {
    return { type: CREATE_COURSE_SUCCESS, payload: course };
}

export function onUpdateCourseSuccess(course) {
    return { type: UPDATE_COURSE_SUCCESS, payload: course };
}

export function loadCourses() {
    return dispatch => {
        return courseApi.getAllCourses()
            .then(courses => dispatch(onLoadCoursesSuccess(courses)))
            .catch(error => { throw error; });
    };
}

export function saveCourse(course) {
    return dispatch => {
        return courseApi.saveCourse(course)
            .then(onSaveCourse.bind(null, dispatch))
            .catch(error => { throw error; });
    }
}
