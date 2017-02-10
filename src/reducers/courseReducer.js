import initialState from '../store/initialState';
import {
    CREATE_COURSE_SUCCESS,
    LOAD_COURSES_SUCCESS,
    UPDATE_COURSE_SUCCESS
} from '../actions/actionTypes';

export default function courseReducer(state = initialState.courses, { type, payload }) {
    switch(type) {
    case LOAD_COURSES_SUCCESS:
        return payload;
    case CREATE_COURSE_SUCCESS:
        return [
            ...state,
            Object.assign({}, payload)
        ];
    case UPDATE_COURSE_SUCCESS:
        return [
            ...state.filter(course => course.id !== payload.id),
            Object.assign({}, payload)
        ];
    default:
        return state;
    }
}
