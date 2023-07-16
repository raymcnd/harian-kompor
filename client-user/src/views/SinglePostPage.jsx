import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPostById } from '../store/actions/actionCreator'

function SinglePostPage() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const post = useSelector((state) => {
        return state.post.byId
    })

    function formatDate(date) {
        return new Intl.DateTimeFormat('id-ID', { dateStyle: 'full',
          timeStyle: "medium"}).format(new Date(date))
    }

    useEffect(() => {
        dispatch(fetchPostById(id))
    }, [])

    console.log(post)

    return (
        <div className='d-flex flex-column align-items-center mt-5' style={{width: "100%", minHeight: "85vh"}}>
            <h1 className='text-center col-8'>{post.title}</h1>
            <div className='text-start col-8 mt-4'>Oleh <span className='fw-bold'>{post.User.username}</span></div>
            <div className='col-8 fst-italic fw-light'>{formatDate(post.createdAt)}</div>
            <img className='col-8 mt-3' src={post.imgUrl} alt="" style={{aspectRatio: "16 / 9", objectFit: "cover"}}/>
                        
            <div className='col-8 mt-4'>
                <p>
                    {post.content}
                </p>
            </div>

            <div className='col-8 mt-4 fst-italic'>
                Tags: {post.Tags.map(e => e.name).join(", ")}
            </div>
        </div>
    )
}

export default SinglePostPage