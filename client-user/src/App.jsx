import { useState } from 'react'
import komporWhite from "./assets/komporWhite.svg"
import komporMaroon from "./assets/komporMaroon.svg"
import kWhite from "./assets/kWhite.svg"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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

      <div className='d-flex justify-content-center' style={{width: "100", minHeight: "100vh"}}>
        <div className="col-10 d-flex flex-column align-items-center" style={{maxWidth: "1200px", backgroundColor: "#F1F0EA"}}>
          <img className="mt-4" src={komporMaroon} alt="" style={{width: "30%"}}/>

          <nav className="navbar d-flex align-items-center mt-4" style={{width: "100%", borderBlock: "solid", borderBlockColor: "#dec3c6"}}>
            <div className="col-12 d-flex align-items-center">
              {/* <div className='col-10' > */}
                <div className="d-flex justify-content-center align-items-center px-3" style={{flexGrow: "1", gap: "25px"}}>
                    <a className="nav-link fw-semibold" href="" style={{color: "#930000"}}>Kategori1</a>
                    <a className="nav-link fw-semibold" href="" style={{color: "#930000"}}>Kategori2</a>
                    <a className="nav-link fw-semibold" href="" style={{color: "#930000"}}>Kategori3</a>
                    <a className="nav-link fw-semibold" href="" style={{color: "#930000"}}>Kategori4</a>
                    <a className="nav-link fw-semibold" href="" style={{color: "#930000"}}>Kategori5</a>
                    <a className="nav-link fw-semibold" href="" style={{color: "#930000"}}>Kategori6</a>
                    <a className="nav-link fw-semibold" href="" style={{color: "#930000"}}>Kategori7</a>
                </div>
              {/* </div> */}
            </div>
          </nav>

          <div className="mt-3" style={{ width: "100%" }}>
            <h6 className='fw-bold' style={{color: "#930000"}}>Topik Panas 🔥</h6>
            <div className='d-flex mt-2' style={{width: "100%", gap: "2%"}}>
              <div className="card shadow" style={{width: "32%", backgroundColor: "#E0DDCF"}}>
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." height={"100px"} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

              <div className="card shadow" style={{width: "32%", backgroundColor: "#E0DDCF"}}>
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." height={"100px"} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

              <div className="card shadow" style={{width: "32%", backgroundColor: "#E0DDCF"}}>
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." height={"100px"} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4" style={{ width: "100%" }}>            
            <div className='d-flex mt-2' style={{width: "100%", gap: "2%"}}>
              <div class="" style={{width: "20%"}}>
                <h6 className='fw-bold' style={{color: "#930000"}}>Terkini</h6>
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." height={"80px"} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

              <div className="" style={{width: "56%"}}>
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." width={"100%"} height={"400px"} style={{objectFit: "cover"}}/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>

              <div className="" style={{width: "20%"}}>
                <h6 className='fw-bold' style={{color: "#930000"}}>Rekomendasi</h6>
                <img src="https://picsum.photos/400" className="card-img-top" alt="..." height={"80px"} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
