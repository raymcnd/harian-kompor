import BigPostCard from "./BigPostCard"


function HotPosts({hotPosts}) {
    return (
        <div className="mt-3" style={{ width: "100%" }}>
            <h6 className='fw-bold mt-2' style={{color: "#930000"}}>Topik Panas 🔥</h6>
            <div className='d-flex mt-3' style={{width: "100%", gap: "2%"}}>
            
            {
                hotPosts.map((post, i) => {
                    return <BigPostCard post={post} key={i}/>
                })
            }
            
            </div>
        </div>
    )
}

export default HotPosts