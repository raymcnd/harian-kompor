import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Sidebar.jsx"
import PostsView from './views/PostsView.jsx'


function App() {
  const [page, setPage] = useState("")
  const [form, setForm] = useState({
    title: "",
    content: "",
    imgUrl: "",
    categoryId: "",
  })
  
  function handleFormChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    try {
      // console.log(form)
      const completeForm = {
        id: posts.length+1,
        title: form.title,
        slug: form.title.split(" ").join("-"),
        content: form.content,
        imgUrl: form.imgUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: form.categoryId,
        authorId: Math.ceil(Math.random()*3)
      }
      
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(completeForm)
      })

      if (!response.ok) {
        throw new Error("Something went wrong")
      }
  
      console.log("sukses", response.data)
      setPage("home")
    } catch (err) {
      console.log("error", err)
    }

  }

  if (page === "AddPost") {
    return (
      <>
      {/* Navbar */}
        <nav className="navbar" style={{backgroundColor: "#930000", width: "100"}}>
          <div className="ms-4 mb-1 d-flex align-items-center">
            <a className="" href="#">
              <img src={komporWhite} alt="KomporLogo" height="20"/>
            </a>
          </div>
        </nav>
  
      <div className='d-flex' style={{width: "100", minHeight: "100vh", backgroundColor: "#F1F0EA"}}>
        {/* Sidebar */}
        <div className='col-3 p-4' style={{maxWidth: "250px", height: "100", backgroundColor: "#E0DDCF"}}>
          <span className='fw-bold' style={{fontSize: "0.85rem", color: "#575757"}}>MENU</span>
          <ul className='navbar-nav ps-2'>
            <li className='nav-item'><a className="nav-link" href="">Posts</a></li>
            <li className='nav-item'><a className="nav-link" href="">Categories</a></li>
            <li className='nav-item'><a className="nav-link" href="">Tags</a></li>
          </ul>
        </div>
  
        {/* Form */}
        <div className="p-4 col-9" style={{height: "100", flexGrow: "1"}}>
        <h1>Add New Post</h1>
        <hr />
        <form className='col-6' onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" id="" onChange={handleFormChange} name="title" required/>
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label><br />
            <select name="categoryId" id="" value={form.categoryId} onChange={handleFormChange} required>
                <option value="" disabled>--Choose category--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label><br />
            <textarea className="col-12" name="content" id="" rows="10" onChange={handleFormChange} required></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input name="imgUrl" type="text" className="form-control" id="" onChange={handleFormChange}/>
          </div>
          
          <button type="submit" className="btn btn-success col-12">Submit</button>
        </form>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
    <Navbar />

    <div className='d-flex' style={{width: "100%", minHeight: "100vh", backgroundColor: "#F1F0EA"}}>
      <Sidebar />
      <PostsView />
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
