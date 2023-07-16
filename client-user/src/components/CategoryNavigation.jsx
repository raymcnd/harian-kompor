function CategoryNavigation() {
    return (
        <nav className="navbar d-flex align-items-center mt-4" style={{width: "100%", borderBlock: "solid", borderBlockColor: "#dec3c6", borderBlockWidth: "2px"}}>
            <div className="col-12 d-flex align-items-center">
                <div className="d-flex justify-content-center align-items-center px-3" style={{flexGrow: "1", gap: "25px"}}>
                    <a className="nav-link fw-semibold" href="#" style={{color: "#930000"}}>Kategori1</a>
                    <a className="nav-link fw-semibold" href="#" style={{color: "#930000"}}>Kategori2</a>
                    <a className="nav-link fw-semibold" href="#" style={{color: "#930000"}}>Kategori3</a>
                    <a className="nav-link fw-semibold" href="#" style={{color: "#930000"}}>Kategori4</a>
                    <a className="nav-link fw-semibold" href="#" style={{color: "#930000"}}>Kategori5</a>
                    <a className="nav-link fw-semibold" href="#" style={{color: "#930000"}}>Kategori6</a>
                    <a className="nav-link fw-semibold" href="#" style={{color: "#930000"}}>Kategori7</a>
                </div>
            </div>
        </nav>
    )
}

export default CategoryNavigation