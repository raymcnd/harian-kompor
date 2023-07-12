import SmallPostCard from "./SmallPostCard"

function RecommendedPosts() {
    return (
        <div className="" style={{width: "20%"}}>

            <h6 className='fw-bold mb-2' style={{color: "#930000"}}>Rekomendasi</h6>

            {
                [0, 1, 2, 3, 4, 5].map(e => {
                    return <SmallPostCard />
                })
            }
            
        </div>
    )
}

export default RecommendedPosts