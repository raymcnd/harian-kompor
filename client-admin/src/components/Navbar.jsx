import komporWhite from "../assets/komporWhite.svg"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar" style={{backgroundColor: "#930000", width: "100"}}>
            <div className="ms-4 mb-1 d-flex align-items-center">
                <Link className="" to="/">
                    <img src={komporWhite} alt="KomporLogo" height="20"/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar