function Sidebar() {
    return (
        <div className='col-3 p-4' style={{maxWidth: "200px", minHeight: "100%", backgroundColor: "#E0DDCF"}}>
            <span className='fw-bold' style={{fontSize: "0.85rem", color: "#575757"}}>MENU</span>
                <ul className='navbar-nav ps-2'>
                    <li className='nav-item'><a className="nav-link" href="">Posts</a></li>
                    <li className='nav-item'><a className="nav-link" href="">Categories</a></li>
                    <li className='nav-item'><a className="nav-link" href="">Tags</a></li>
                </ul>
        </div>
    )
}

export default Sidebar