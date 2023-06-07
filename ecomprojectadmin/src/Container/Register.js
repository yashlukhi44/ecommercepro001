import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {

    let navigate = useNavigate();

    useEffect(()=>{
        let sessionData = sessionStorage.getItem('username');
        // console.log(sessionData);
    
        if(sessionData==null){
        navigate('/')
        }
    })

    return(
            <div>
        <div className="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
            <div className="auth-box bg-dark border-top border-secondary">
            <div>
                <div className="text-center p-t-20 p-b-20 pb-3">
                <span className="db"><img src="assets/images/logo.png" alt="logo" /></span>
                </div>
                {/* Form */}
                <form className="form-horizontal m-t-20" action="index.html">
                <div className="row p-b-30">
                    <div className="col-12">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text bg-success text-white" id="basic-addon1"><i className="ti-user" /></span>
                        </div>
                        <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                    </div>
                    {/* email */}
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text bg-danger text-white" id="basic-addon1"><i className="ti-email" /></span>
                        </div>
                        <input type="text" className="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text bg-warning text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                        </div>
                        <input type="text" className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text bg-info text-white" id="basic-addon2"><i className="ti-pencil" /></span>
                        </div>
                        <input type="text" className="form-control form-control-lg" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required />
                    </div>
                    </div>
                </div>
                <div className="row border-top border-secondary">
                    <div className="col-12">
                    <div className="form-group">
                        <div className="p-t-20 p-3">
                        <button className="btn btn-block btn-lg btn-info" type="submit">Sign Up</button>
                        </div>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>

    )
}

export default Register;