import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Authenticate from "./Authenticate";
import { useNavigate } from "react-router";
import { useState } from "react";
import './LoginPatient.css'
import Footer from "../Homepage/Footer";
const LoginAdmin=()=>{
    const [AdminLogin,setAdminLogin] = useState({username: "", password :""});
    const navigate = useNavigate();
    
const handleSubmit=async (e)=>{
e.preventDefault();

 await axios.post("http://localhost:8080/login/admin",{
   username : AdminLogin.username , 
   password : AdminLogin.password,
 }).then( (response)=>{
 console.log(response.data);

 if(response.data === "valid")
 {
   Authenticate.loggedIn(AdminLogin.username);
   // sessionStorage.setItem("token",JSON.stringify(AdminLogin.username));
   // window.location=`/dashboard/${AdminLogin.username}`;
   navigate(`/dashboard/admin/${AdminLogin.username}`);
   setAdminLogin({username : '',password : ''})
   
 }
 else{
   setAdminLogin({username: '', password: '' });
   // setError('invalid Username and Password');
 
 }
}).catch((err)=>{
 console.log(err.response);
})
}

const handleInput=(e)=>{
var name = e.target.name;
var value = e.target.value;
setAdminLogin({...AdminLogin,[name] : value})

}

    return(
        <div class="body">
        <div class="container-fluid d-flex justify-content-center align-items-center">
          <form className='m-5 form_bg' onSubmit={handleSubmit}>
            {/* <span>{error}</span> */}
            <h2>Hospify</h2>
            <p>Admin Login Page.</p>
            <div class="form-group mb-3">
              <label className='mb-2'>Username</label>
              <input type="text"  class="form-control" placeholder="Enter Username" name='username' required onChange={handleInput}/>
            </div>
            <div class="form-group mb-4 ">
              <label  className='mb-2'>Password</label>
              <input type="password"  class="form-control" placeholder="Password" name='password' required onChange={handleInput}/>
            </div>
          <button type="submit" class="btn btn-primary rounded-pill mb-3  w-75 login-btn" >Login</button>
          <div className='form-group '>
          New To Hospify, <Link to="/register/patient">Create New Account</Link>  
        </div>
        </form>
        
      </div>
      
      <div>
        <Footer/>
      </div>
      </div>
    )
}
export default LoginAdmin