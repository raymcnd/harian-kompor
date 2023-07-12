import kWhite from "../assets/kWhite.svg"

function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-center align-items-center" style={{backgroundColor: "#930000", width: "100%"}}>
            <div className="col-10 d-flex align-items-center" style={{maxWidth: "1200px"}}>
            {/* <div className='col-10' > */}
                <a className="d-flex align-items-center" href="#">
                <img src={kWhite} alt="KomporLogo" height="20"/>
                </a>

                <div className="d-flex justify-content-end align-items-center" style={{flexGrow: "1", gap: "15px"}}>
                    <button className='btn btn-success fw-semibold'>Berlangganan</button>
                    <a className="nav-link text-white fw-semibold" href="">Masuk</a>
                </div>
            {/* </div> */}
            </div>
        </nav>
    )
}

export default Navbar