import HotPosts from '../components/HotPosts'
import RecentPosts from '../components/RecentPosts'
import HeadlinePost from '../components/HeadlinePost'
import RecommendedPosts from '../components/RecommendedPosts'
import { useState, useEffect } from 'react'
import { func } from 'prop-types'

function MainPage() {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch("http://localhost:3000/posts");
        const newPosts = await response.json();

        setPosts(newPosts);
    }

    function getHotPosts() {
        const hotPosts = []
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * posts.length) 
            hotPosts.push(posts[randomIndex])
        }

        return hotPosts
    }

    function getRecentPosts() {
        const recentPosts = []

        for (let i = 0; i < 6; i++) {
            recentPosts.push(posts[i])
        }

        return recentPosts
    }

    function getRecommendedPosts() {
        const recommendedPosts = []

        for (let i = 6; i < 12; i++) {
            recommendedPosts.push(posts[i])
        }

        return recommendedPosts
    }

    function getHeadlinePost() {
        let randomIndex = Math.floor(Math.random() * posts.length) 
        let headlinePost = posts[randomIndex]

        return headlinePost
    }

    useEffect(() => {
        fetchPosts()
      }, [])

    return (
        <>
            <HotPosts hotPosts={getHotPosts()}/>

            <div className="mt-4 pb-4" style={{ width: "100%", borderBottom: "1px solid #dec3c6" }}>            
                <div className='d-flex mt-2' style={{width: "100%", gap: "2%"}}>              
                    <RecentPosts recentPosts={getRecentPosts()}/>
                    <HeadlinePost headlinePost={getHeadlinePost()}/>
                    <RecommendedPosts recommendedPosts={getRecommendedPosts()}/>
                </div>
            </div>
        </>
    )
}

export default MainPage