function BigPostCard() {
    return (
        <div className="card" style={{width: "32%", backgroundColor: "#E0DDCF"}}>
            <img src="https://picsum.photos/400" className="card-img-top" alt="..." height={"100px"} width={"100%"} style={{objectFit: "cover"}}/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default BigPostCard