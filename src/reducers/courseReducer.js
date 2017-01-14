import { CREATE_COURSE } from '../actions/actionTypes';

export default function courseReducer(state = [], { type, payload: course }) {
    switch(type) {
    case CREATE_COURSE:
        return [...state, Object.assign({}, course)];
    default:
        return state;
    }
}
