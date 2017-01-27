import AuthorApi from '../api/mockAuthorApi';
import { LOAD_AUTHORS_SUCCESS } from './actionTypes';

export function onLoadAuthorsSuccess(authors) {
    return { type: LOAD_AUTHORS_SUCCESS, payload: authors };
}

export function loadAuthors() {
    return dispatch => {
        return AuthorApi.getAllAuthors()
            .then(authors => dispatch(onLoadAuthorsSuccess(authors)))
            .catch(error => { throw error; });
    };
}
