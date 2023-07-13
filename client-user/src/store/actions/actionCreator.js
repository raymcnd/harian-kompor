import { FETCH_POSTS_SUCCESS } from "./actionType"

export const fetchPostsSuccess = (payload) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    }
}

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch("http://localhost:3000/posts");
            const newPosts = await response.json();
            
            let action = fetchPostsSuccess(newPosts);
            dispatch(action);
            // setPosts(newPosts);
        } catch (err) {
            console.log(err)
        }
    }
}