import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Sidebar.jsx"

function App() {
  const [page, setPage] = useState("")

  return (
    <>
    <Navbar />

    <div className='d-flex' style={{width: "100%", minHeight: "100vh", backgroundColor: "#F1F0EA"}}>
      
      <Sidebar />
      {/* <PostsView /> */}
      <Outlet />
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
