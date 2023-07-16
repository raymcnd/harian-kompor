import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORY_SUCCESS } from "../actions/actionType";

let initialState = {
    all: [],
    byId: {}
}

function categoryReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                all: action.payload
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                byId: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer