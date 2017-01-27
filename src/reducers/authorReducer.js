import initialState from '../store/initialState';
import { LOAD_AUTHORS_SUCCESS } from '../actions/actionTypes';

export default function authorReducer(state = initialState.authors, { type, payload: authors }) {
    switch(type) {
    case LOAD_AUTHORS_SUCCESS:
        return authors;
    default:
        return state;
    }
}
