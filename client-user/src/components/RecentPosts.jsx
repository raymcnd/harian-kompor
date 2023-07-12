import SmallPostCard from "./SmallPostCard"

function RecentPosts({recentPosts}) {
    return (
        <div className="" style={{width: "20%"}}>
            <h6 className='fw-bold mb-2' style={{color: "#930000"}}>Terkini</h6>

            {
                recentPosts.map((post, i) => {
                    return <SmallPostCard post={post} key={i}/>
                })
            }
        </div>
    )
}

export default RecentPosts