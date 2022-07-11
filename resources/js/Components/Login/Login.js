import React, { useState} from "react";
import axios from "axios";
import "../../../css/app.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    let navigate = useNavigate();

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        axios.get(`http://127.0.0.1:8000/api/users?email=${email}&password=${pass}`)
          .then(function (response) {
            if(response.data.length > 0){
                localStorage.setItem("user", JSON.stringify(response.data[0]));
                setTimeout(function(){
                    window.location.reload();
                 }, 100);
                navigate("/homePage");
                
            }
            else{
                alert('Login failed!');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
        <div className = "d-flex justify-content-center align-items-center vh-100 border rounded ">
            <form>
                <div className="mb-3">
                
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange = {(e)=>  setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange = {(e)=>setPass(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" onClick = {handleSubmitLogin} className="btn btn-primary">
                    Submit
                </button>
            </form>
            </div>
        </>
    );
}

export default Login;
