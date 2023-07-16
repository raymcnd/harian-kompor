import Navbar from "../components/Navbar";
import loginFiller from "../assets/loginFiller.jpg"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginAdmin } from "../store/actions/actionCreator";
import { useNavigate } from "react-router-dom";

function LoginView() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleFormChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        dispatch(loginAdmin({
            email: form.email,
            password: form.password
        }))
            .then(() => {
                navigate("/")
            })
    }

    console.log(form)

    return (
        <>
        <Navbar />
        <div className="d-flex col-12" style={{minHeight: "100vh"}}>
            <div className="col-6" style={{backgroundColor: "red"}}>
                <img src={loginFiller} alt="" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            </div>
            <div className="col-6 pt-5 d-flex justify-content-center" style={{backgroundColor: "#F1F0EA"}}>
                <div className="col-10">
                <h1 className="mb-4">Sign In</h1>
                <form className="" onSubmit={handleFormSubmit}>
                    <div className="mb-2">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" onChange={handleFormChange}></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onChange={handleFormChange}></input>
                    </div>

                    <button type="submit" className="btn btn-success mt-4" style={{width: "100%"}}>Sign In</button>
                </form>
                </div>

            </div>
        </div>
        </>

    )
}

export default LoginView