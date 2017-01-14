export default function courseReducer(state = [], action) {
    switch(action.type) {
    case 'CREATE_COURSE':
        return [...state, Object.assign({}, action.payload.course)];
    default:
        return state;
    }
}
