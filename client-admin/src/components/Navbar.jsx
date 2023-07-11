import komporWhite from "../assets/komporWhite.svg"

function Navbar() {
    return (
        <nav className="navbar" style={{backgroundColor: "#930000", width: "100"}}>
            <div className="ms-4 mb-1 d-flex align-items-center">
                <a className="" href="#">
                    <img src={komporWhite} alt="KomporLogo" height="20"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar