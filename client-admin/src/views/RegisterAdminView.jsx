import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerAdmin } from "../store/actions/actionCreator"

function RegisterAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
    })

    // Sweet Alert
    function showSuccess(msg) {
        Swal.fire({
                position: 'top',
                toast: true,
                icon: 'success',
                title: msg,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3500
        });
    }

    function showError(err) {
        try {
          Swal.fire({
            icon: 'error',
            title: err.message
          })
        } catch (error) {
          console.log(error)
        }
    }
    // End of Sweet Alert

    function handleFormChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        dispatch(registerAdmin(formData))
            .then(() => {
                showSuccess("Register Success")
                document.getElementById("registerAdminForm").reset();
            })
            .catch((err) => {
                showError(err)
            })
    }

    return (
        <div className="p-4 col-9" style={{height: "100", flexGrow: "1"}}>
            <h1>Register New Administrator</h1>
            <hr />
                <form className='col-6' onSubmit={handleFormSubmit} id="registerAdminForm">
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" onChange={handleFormChange} name="username" required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" onChange={handleFormChange} name="email" required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={handleFormChange} name="password" required/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number <span className="fw-light fst-italic">(optional)</span></label>
                        <input type="text" className="form-control" onChange={handleFormChange} name="phoneNumber"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address <span className="fw-light fst-italic">(optional)</span></label>
                        <input type="text" className="form-control" onChange={handleFormChange} name="address"/>
                    </div>

                    <button type="submit" className="btn btn-success col-12">Submit</button>
                </form>
        </div>
    )
}

export default RegisterAdmin