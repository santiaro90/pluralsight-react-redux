import initialState from '../store/initialState';
import { AJAX_CALL_ERROR, BEGIN_AJAX_CALL } from '../actions/actionTypes';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, { type, payload }) {
    if (type === BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (type === AJAX_CALL_ERROR ||
        actionTypeEndsInSuccess(type)) {
        return state - 1;
    }

    return state;
}
