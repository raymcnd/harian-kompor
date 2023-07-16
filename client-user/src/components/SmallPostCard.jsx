import { Link } from "react-router-dom"

function SmallPostCard({post}) {
    if (post) return (
        <Link to={`/post/${post.id}`} className="nav-link">
            <div className='d-flex mb-3 pt-3' style={{borderTop: "1px solid #dec3c6"}}>
                <div className="card-body col-8">
                    <h6 className="card-title" style={{fontSize: "0.9em"}}>{post.title}</h6>
                </div>
                <div className='col-4 ps-3'>
                    <img src={post.imgUrl} className="card-img-top" alt="..." style={{width: "100%", objectFit: "cover", aspectRatio: "1 / 1"}}/>
                </div>
            </div>
        </Link>
    )
}

export default SmallPostCard