import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useParams, useLocation } from 'react-router-dom'
import { fetchCategories, fetchPostById, submitAddPost, submitEditPost } from '../store/actions/actionCreator'

function PostForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const [form, setForm] = useState({
        title: "",
        content: "",
        imgUrl: "",
        categoryId: "1",
        tag1: "",
        numOfTags: 1
      })

    let paramsId;
    if (location.pathname !== "/posts/add") {
        paramsId = useParams().id
    }
    
    const categories = useSelector((state) => {
        return state.category.all
    })
    const postById = useSelector((state) => {
        return state.post.byId
    })

    // Sweet Alert
    function showSuccess(msg) {
        Swal.fire({
                position: 'top',
                toast: true,
                icon: 'success',
                title: msg,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3500
        });
    }

    function showError(err) {
        try {
            Swal.fire({
            icon: 'error',
            title: err.message
            })
        } catch (error) {
            console.log(error)
        }
    }
    // End of Sweet Alert

    function handleFormChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    function tagKeys() {
        let tagKeys = []
        for (let i = 0; i < form.numOfTags; i++) {
            tagKeys.push(`tag${i+1}`)
        }
        return tagKeys
    }

    function addTagForm() {
        setForm({
            ...form,
            numOfTags: form.numOfTags + 1
        })
    }

    function removeTagForm() {
        const targetKey = tagKeys()[form.numOfTags - 1]
        setForm({
            ...form,
            numOfTags: form.numOfTags - 1,
            [targetKey]: undefined
        })
    }

    async function handleFormSubmit(event) {
        event.preventDefault()
        let tagArr = tagKeys().map(e => form[e]).filter(e => e)
        const formData = {
                title: form.title,
                content: form.content,
                imgUrl: form.imgUrl,
                categoryId: +form.categoryId,
                tags: tagArr
            }
        if (location.pathname === "/posts/add") {
            dispatch(submitAddPost(formData))
            .then(() => {
                navigate("/")
                showSuccess("New Post Added")
            })
            .catch((err) => {
                showError(err)
            })
        } else {
            dispatch(submitEditPost(paramsId, formData))
            .then(() => {
                navigate("/")
                showSuccess("Post Updated")
            })
            .catch((err) => {
                showError(err)
            })
        }

    }

    useEffect(() => {
        dispatch(fetchCategories())
        if (location.pathname !== "/posts/add") {
            dispatch(fetchPostById(paramsId))
        }
    }, [])

    useEffect(() => {
        if (location.pathname !== "/posts/add" && postById.title) {
            let tagData = {}
            postById.Tags.forEach((e, i) => {
                tagData[`tag${i + 1}`] = e.name
            })
            if (postById.Tags.length === 0) {
                tagData.tag1 = "",
                tagData.numOfTags = 1
            }
            
            setForm({
                title: postById.title,
                content: postById.content,
                imgUrl: postById.imgUrl,
                categoryId: postById.categoryId,
                numOfTags: postById.Tags.length,
                ...tagData,
            })
        }
    }, [postById])

    return (
        <div className="p-4 col-9" style={{height: "100", flexGrow: "1"}}>
            <h1>Add New Post</h1>
            <hr />
                <form className='col-6' onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" id="" onChange={handleFormChange} name="title" defaultValue={form.title} required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label><br />
                        <select className='form-select' name="categoryId" value={form.categoryId} onChange={handleFormChange} required>
                            {
                                categories.map(e => {
                                    return <option value={e.id} key={e.id}>{e.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label><br />
                        <textarea className="col-12 form-control" name="content" id="" rows="10" onChange={handleFormChange} defaultValue={form.content} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input name="imgUrl" type="text" className="form-control" id="" onChange={handleFormChange} defaultValue={form.imgUrl}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Tags</label>
                        {   
                            tagKeys().map((e, i) => {
                                return <input name={e} type="text" className="form-control mb-2" key={i} onChange={handleFormChange} defaultValue={form[`tag${i + 1}`]}/>
                            })
                        }

                        <div className='d-flex justify-content-center' style={{gap: "5px"}}>
                            {form.numOfTags > 1 ? <button type='button' className='btn btn-warning mt-1 fw-semibold' style={{fontSize: "0.8em"}} onClick={removeTagForm}>Remove</button> : ""}
                            <button type='button' className='btn btn-light mt-1 fw-semibold' style={{fontSize: "0.8em"}} onClick={addTagForm}>Add More Tag</button>
                        </div>
                    </div>

                    
                    <button type="submit" className="btn btn-success col-12 mt-4">Submit</button>

                </form>
        </div>
    )
}

export default PostForm