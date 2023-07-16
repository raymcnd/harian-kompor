import { useDispatch } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { deleteCategory, fetchCategories } from "../store/actions/actionCreator"

function CategoryRow({item, i}) {
    const dispatch = useDispatch()

    function formatDate(date) {
        return new Intl.DateTimeFormat('en-EN', { dateStyle: 'full',
          timeStyle: "medium"}).format(new Date(date))
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

    function handleDelete() {
        dispatch(deleteCategory(item.id))
            .then(() => {
                dispatch(fetchCategories())
                showSuccess(`Category #${item.id} deleted`)
            })
            .catch((err) => {
                showError(err)
            })
    }

    return (
        <tr>
            <th scope="row">{i+1}</th>
            <td>{item.name}</td>
            <td style={{maxWidth: "100px"}}>{formatDate(item.createdAt)}</td>
            <td style={{maxWidth: "100px"}}>{formatDate(item.updatedAt)}</td>
            <td style={{width: "150px"}}>
                    <Link to={`/categories/edit/${item.id}`}><button className="btn btn-warning" style={{fontSize: "0.8rem"}}>Edit</button></Link>
                    <button className="btn btn-danger ms-2" style={{fontSize: "0.8rem"}} onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default CategoryRow