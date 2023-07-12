import BigPostCard from "./BigPostCard"


function HotPosts() {
    return (
        <div className="mt-3" style={{ width: "100%" }}>
            <h6 className='fw-bold mt-2' style={{color: "#930000"}}>Topik Panas 🔥</h6>
            <div className='d-flex mt-3' style={{width: "100%", gap: "2%"}}>
            
            {
                [0, 1, 2].map(e => {
                    return <BigPostCard />
                })
            }
            
            </div>
        </div>
    )
}

export default HotPosts