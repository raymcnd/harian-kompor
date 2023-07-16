import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { fetchCategories, fetchCategoryById, submitAddCategory, submitEditCategory } from "../store/actions/actionCreator"

function CategoryFormView() {
    let location = useLocation()
    const categoryById = useSelector((state) => {
        return state.category.byId
    })
    const [categoryName, setCategoryName] = useState("")
    // const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    function getTitle() {
        if (location.pathname === "/categories/add") {
            return "Add New Category"
        } else {
            return "Edit Category"
        }
    }

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
        setCategoryName(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        if (location.pathname === "/categories/add") {
            dispatch(submitAddCategory({
                name: categoryName
            }))
            .then(() => {
                navigate("/categories")
                showSuccess("New category added")
            })
            .catch((err) => {
                showError(err)
            })
        } else {
            dispatch(submitEditCategory(id, {
                name: categoryName
            }))
            .then(() => {
                navigate("/categories")
                showSuccess("Category updated")

            })
            .catch((err) => {
                showError(err)
            })
        }
    }

    useEffect(() => {
        if (location.pathname !== "/categories/add") {
            dispatch(fetchCategoryById(id))
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    useEffect(() => {
        if (location.pathname !== "/categories/add") {
            setCategoryName(categoryById.name)
        }
    }, [categoryById])

    return (
        <div className="p-4 col-9" style={{height: "100", flexGrow: "1"}}>
            <h1>{getTitle()}</h1>
            <hr />
                <form className='col-6' onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Category Name</label>
                        <input type="text" className="form-control" id="" onChange={handleFormChange} name="title" defaultValue={categoryName}/>
                    </div>
                    
                    <button type="submit" className="btn btn-success col-12">Submit</button>
                </form>
        </div>
    )
}

export default CategoryFormView