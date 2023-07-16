import { useDispatch, useSelector } from "react-redux"
import CategoryRow from "../components/CategoryRow"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { fetchCategories } from "../store/actions/actionCreator"

function CategoriesView() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector((state) => {
        return state.category.all
    })

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className="p-4 col-9" style={{height: "100", flexGrow: "1"}}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Categories</h1>
                <span>
                    <button type="button" className='btn btn-success' onClick={() => navigate("/categories/add")}>New Category</button>
                </span>
            </div>
            <hr />
            <table className="table table-light">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Created at</th>
                <th scope="col">Updated At</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((item, i) => {
                    return <CategoryRow item={item} i={i} key={i}/>
                })}
            </tbody>
            </table>
        </div>
    )
}

export default CategoriesView