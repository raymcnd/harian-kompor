import { useState, useEffect } from 'react'
import PostRow from "../components/PostRow.jsx"
import { useNavigate } from 'react-router'

function PostsView() {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch("http://localhost:3000/posts");
        const newPosts = await response.json();

        setPosts(newPosts);
    }

    useEffect(() => {
        fetchPosts()
      }, [])

    return (
        <div className="p-4 col-9" style={{height: "100", flexGrow: "1"}}>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Posts</h1>
                <span>
                    <button type="button" className='btn btn-success' onClick={() => navigate("/posts/add")}>New Post</button>
                </span>
            </div>
            <hr />
            <table className="table table-light">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Content</th>
                <th scope="col">Publish Date</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((item, i) => {
                    return <PostRow item={item} i={i} key={i}/>
                })}
            </tbody>
            </table>
        </div>
    )
}

export default PostsView