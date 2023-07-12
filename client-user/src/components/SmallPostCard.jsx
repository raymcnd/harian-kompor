function SmallPostCard() {
    return (
        <div className='d-flex mb-3 pt-3' style={{borderTop: "1px solid #dec3c6"}}>
            <div className="card-body col-8">
                <h6 className="card-title" style={{fontSize: "0.9em"}}>Viral Pengguna Bayar Tol Tanpa Setop Diberhentikan Petugas</h6>
            </div>
            <div className='col-4 ms-3'>
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." style={{width: "100%", objectFit: "cover", aspectRatio: "1 / 1"}}/>
            </div>
        </div>
    )
}

export default SmallPostCard