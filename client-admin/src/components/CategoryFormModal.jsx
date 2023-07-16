import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function CategoryFormModal() {
    const [categoryName, setCategoryName] = useState("")
    const [rerender, setRerender] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleCategoryChange(event) {
        setCategoryName(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        try {
            console.log("submit")
        } catch (err) {
            
        }
    }

    return (
        <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Category</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="modal-body">
                            <label htmlFor="" className="form-label">Category Name</label>
                            <input type="text" className="form-control" onChange={handleCategoryChange} required/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CategoryFormModal