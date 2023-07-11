import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

function PostForm() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        title: "",
        content: "",
        imgUrl: "",
        categoryId: "",
      })
    
    function handleFormChange(event) {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    })
    }

    async function handleFormSubmit(event) {
        event.preventDefault()

        try {
            const completeForm = {
                    // id: posts.length+1,
                    title: form.title,
                    slug: form.title.split(" ").join("-"),
                    content: form.content,
                    imgUrl: form.imgUrl,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    categoryId: +form.categoryId,
                    authorId: Math.ceil(Math.random()*3)
                }
            
            const response = await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(completeForm)
                })

            if (!response.ok) throw new Error("Something went wrong")
        
            console.log("sukses", response.data)
            navigate("/")
        } catch (err) {
            console.log("error", err)
        }

    }

    return (
        <div className="p-4 col-9" style={{height: "100", flexGrow: "1"}}>
            <h1>Add New Post</h1>
            <hr />
                <form className='col-6' onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" id="" onChange={handleFormChange} name="title" required/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label><br />
                        <select name="categoryId" id="" value={form.categoryId} onChange={handleFormChange} required>
                            <option value="" disabled>--Choose category--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label><br />
                        <textarea className="col-12" name="content" id="" rows="10" onChange={handleFormChange} required></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input name="imgUrl" type="text" className="form-control" id="" onChange={handleFormChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-success col-12">Submit</button>
                </form>
        </div>
    )
}

export default PostForm