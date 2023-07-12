import { useState } from 'react'
import komporMaroon from "./assets/komporMaroon.svg"
import Navbar from './components/Navbar'
import CategoryNavigation from './components/CategoryNavigation'
import HotPosts from './components/HotPosts'
import RecentPosts from './components/RecentPosts'
import HeadlinePost from './components/HeadlinePost'
import RecommendedPosts from './components/RecommendedPosts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div className='d-flex justify-content-center pb-5' style={{width: "100%", minHeight: "100vh"}}>
        <div className="col-10 d-flex flex-column align-items-center" style={{maxWidth: "1200px", backgroundColor: "#F1F0EA"}}>
          <img className="mt-4" src={komporMaroon} alt="" style={{width: "30%"}}/>

          <CategoryNavigation />
          <HotPosts/>
          
          <div className="mt-4" style={{ width: "100%", borderBottom: "1px solid #dec3c6" }}>            
            <div className='d-flex mt-2' style={{width: "100%", gap: "2%"}}>              
              <RecentPosts />
              <HeadlinePost />
              <RecommendedPosts />
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
