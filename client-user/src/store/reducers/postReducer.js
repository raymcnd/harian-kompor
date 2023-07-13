import { FETCH_POSTS_SUCCESS } from "../actions/actionType"

let initialState = {
    data: []
}

function postReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return { data: action.payload }
        default:
            return state
    }
}

export default postReducer