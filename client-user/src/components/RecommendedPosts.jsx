import SmallPostCard from "./SmallPostCard"

function RecommendedPosts({recommendedPosts}) {
    return (
        <div className="" style={{width: "20%"}}>

            <h6 className='fw-bold mb-2' style={{color: "#930000"}}>Rekomendasi</h6>

            {
                recommendedPosts.map((post, i) => {
                    return <SmallPostCard post={post} key={i}/>
                })
            }
            
        </div>
    )
}

export default RecommendedPosts