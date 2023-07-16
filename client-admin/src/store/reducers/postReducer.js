import { FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS } from "../actions/actionType";

let initialState = {
    data: [],
    byId: {}
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                byId: action.payload
            }
        default:
            return state
    }
}

export default postReducer