function BigPostCard({post}) {
    if (post) {
        return (
            <div className="card" style={{width: "32%", backgroundColor: "#E0DDCF"}}>
                <img src={post.imgUrl} className="card-img-top" alt="..." height={"100px"} width={"100%"} style={{objectFit: "cover"}}/>
                <div className="card-body">
                    <h6 className="card-title">{post.title}</h6>
                    <p className="card-text" style={{fontSize: "0.9em"}}>{post.content.substring(0, 100) + " ..."}</p>
                </div>
            </div>
        )
    }   
}

export default BigPostCard