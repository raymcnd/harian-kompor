import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deletePost, fetchPosts } from "../store/actions/actionCreator"

function PostRow({item, i}) {

    const dispatch = useDispatch()

    function formatDate (date) {
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

    function handleDeletePost() {
        dispatch(deletePost(item.id))
            .then(() => {
                showSuccess(`Post #${item.id} deleted`)
                return dispatch(fetchPosts())
            })
            .catch((err) => {
                showError(err)
            })
    }

    return (
        <tr>
            <th scope="row">{i+1}</th>
            <td>{item.title}</td>
            <td>{item.User.username}</td>
            <td>{item.Category.name}</td>
            <td>{item.content.substring(0, 120) + " . . ."}</td>
            <td>{formatDate(item.createdAt)}</td>
            <td>
                {item.Tags.map(e => {
                    return e.name
                }).join(", ")}
            </td>
            <td style={{width: "150px"}}>
                <Link to={`/posts/edit/${item.id}`}><button className="btn btn-warning fw-semibold text-white" style={{fontSize: "0.8rem"}}>Edit</button></Link>
                <button className="btn btn-danger ms-2 fw-semibold" style={{fontSize: "0.8rem"}} onClick={handleDeletePost}>Delete</button>
            </td>
        </tr>
    )
}   

export default PostRow