import { FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORY_SUCCESS, FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS } from "./actionType"

const baseUrl = "http://localhost:3000"


// Posts
export const fetchPostsSuccess = (payload) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload
    }
}

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/posts", {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (!response.ok) throw {message: "Something went wrong"}
            const newPosts = await response.json();
            dispatch(fetchPostsSuccess(newPosts));
        } catch (err) {
            console.log(err)
        }
    }
}

export const submitAddPost = (formData) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/posts", {
                method: "POST",
                headers: {
                    access_token: localStorage.access_token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
                })

            if (!response.ok) throw new Error("Something went wrong")
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
            const response = await fetch(baseUrl + "/posts/" + id, {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (!response.ok) throw {message: "Something went wrong"}
            const post = await response.json()
            dispatch(fetchPostByIdSuccess(post))
        } catch (err) {
            throw err
        }
    }
}

export const submitEditPost = (id, formData) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/posts/" + id, {
                method: "PUT",
                headers: {
                    access_token: localStorage.access_token,
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) throw {message: "Something went wrong"}
        } catch (err) {
            throw err
        }
    }
}

export const deletePost = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/posts/" + id, {
                method: "DELETE",
                headers: {
                    access_token: localStorage.access_token,
                }
            })
            if (!response.ok) throw {message: "Something went wrong"}
        } catch (err) {
            throw err
        }
    }
}
// End of Posts

// Categories
export const fetchCategoriesSuccess = (payload) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload
    }
}

export const fetchCategories = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/categories", {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (!response.ok) throw {message: "Something went wrong"}
            const newCategories = await response.json()
            dispatch(fetchCategoriesSuccess(newCategories))
        } catch (err) {
            console.log(err)
        }
    }
}

export const submitAddCategory = (formData) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/categories", {
                method: "POST",
                headers: {
                    access_token: localStorage.access_token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) throw {message: "Something went wrong"}
        } catch (err) {
            throw err
        }
    }
}

export const fetchCategoryByIdSuccess = (payload) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload
    }
}

export const fetchCategoryById = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + `/categories/${id}`, {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (!response.ok) throw {message: "Something went wrong"}
            const category = await response.json()
            dispatch(fetchCategoryByIdSuccess(category))
        } catch (err) {
            throw err
        }
    }
}

export const submitEditCategory = (id, formData) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/categories/" + id, {
                method: "PUT",
                headers: {
                    access_token: localStorage.access_token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) throw {message: "Something went wrong"}
        } catch (err) {
            throw err
        }
    }
}

export const deleteCategory = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/categories/" + id, {
                method: "DELETE",
                headers: {
                    access_token: localStorage.access_token
                }
            })
            if (!response.ok) throw {message: "Something went wrong"}
        } catch (err) {
            throw err
        }
    }
}
// End of Categories

// Users
export const registerAdmin = (formData) => {
    return async (dispatch, getState) => {
        try {
            console.log("json >>>>", JSON.stringify(formData))
            const response = await fetch(baseUrl + "/register", {
                method: "POST",
                headers: {
                    access_token: localStorage.access_token,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) throw {message: "Something went wrong"}
        } catch (err) {
            throw err
        }
    }
}

export const loginAdmin = (formData) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + "/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) throw {message: "Something went wrong"}
            const {access_token} = await response.json()
            localStorage.access_token = access_token
        } catch (err) {
            throw err
        }
    }
}
// End of Users