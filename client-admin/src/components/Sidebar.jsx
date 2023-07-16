import { Link, useNavigate } from "react-router-dom"

function Sidebar() {
    const navigate = useNavigate();
    
    function handleLogout(event) {
        event.preventDefault()
        localStorage.clear()
        navigate("/login")
    }

    return (
        <div className='col-3 p-4' style={{maxWidth: "200px", minHeight: "100%", backgroundColor: "#E0DDCF"}}>
            <span className='fw-bold' style={{fontSize: "0.85rem", color: "#575757"}}>MENU</span>
                <ul className='navbar-nav ps-2 mb-5'>
                    <li className='nav-item'><Link className="nav-link fw-semibold" style={{fontSize: "0.9em", color: "#575757"}} to="/posts">Posts</Link></li>
                    <li className='nav-item'><Link className="nav-link fw-semibold" style={{fontSize: "0.9em", color: "#575757"}} to="/categories">Categories</Link></li>
                    <li className='nav-item'><Link className="nav-link fw-semibold" style={{fontSize: "0.9em", color: "#575757"}} to="/register-admin">Register Admin</Link></li>
                </ul>

            <span className='fw-bold' style={{fontSize: "0.85rem", color: "#575757"}}>ACCOUNT</span>
                <ul className='navbar-nav ps-2'>
                    <li className='nav-item'><span className="nav-link fw-semibold" style={{fontSize: "0.9em", color: "#575757"}}>My Account</span></li>
                    <li className='nav-item'><a className="nav-link fw-semibold" style={{fontSize: "0.9em", color: "#575757", cursor: "pointer"}} onClick={handleLogout}>Logout</a></li>
                </ul>
        </div>
    )
}

export default Sidebar