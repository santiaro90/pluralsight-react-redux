import { LOAD_COURSES_SUCCESS } from '../actions/actionTypes';

export default function courseReducer(state = [], { type, payload: courses }) {
    switch(type) {
    case LOAD_COURSES_SUCCESS:
        return courses;
    default:
        return state;
    }
}
