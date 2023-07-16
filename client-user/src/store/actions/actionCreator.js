import { FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS } from "./actionType"

// const baseUrl = "http://localhost:3000/pub"
const baseUrl = "https://kompor.raymcnd.space/pub"


export const fetchPostsSuccess = (payload) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    }
}

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/posts");
            const newPosts = await response.json();
            
            let action = fetchPostsSuccess(newPosts);
            dispatch(action);
        } catch (err) {
            throw err
        }
    }
}

export const fetchPostByIdSuccess = (payload) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload
    }
}


export const fetchPostById = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/posts/" + id)
            if (!response.ok) throw {message: "Something went wrong"}
            const newData = await response.json()
            dispatch(fetchPostByIdSuccess(newData))
        } catch (err) {
            throw err
        }
    }
}