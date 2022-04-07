import React, { useState } from 'react'
import './LoginPatient.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Homepage/Footer';
const Login =( )=>{

  const [doctorLogin,setPatientLogin] = useState({username: "", password :""});
  
  const navigate = useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("login fired");
  if(doctorLogin.username && doctorLogin.password)
  {
    axios.post("http://localhost:8080/patient/login",{username : doctorLogin.username ,password : doctorLogin.password});
    navigate("/dashboard")
  }

}
const handleInput=(e)=>{
  
}
 return(
      <div class="container-fluid d-flex justify-content-center align-items-center">
          <form className='m-5 shadow bg-body' onSubmit={handleSubmit}>
              <div class="form-group mb-3">
                <label className='mb-2'>UserName</label>
                <input type="text"  class="form-control" placeholder="Enter Username" name='username' required onChange={handleInput}/>
              </div>
              <div class="form-group mb-4 ">
                <label  className='mb-2'>Password</label>
                <input type="password"  class="form-control" placeholder="Password" name='password' required onChange={handleInput}/>
              </div>
              <button type="submit" class="btn btn-primary rounded-pill mb-3  w-75" >Login</button>
              <div className='form-group '>
              New To Hospify, <Link to="/register/RegisterDoctor">Create New Account</Link>
              </div>
          </form>
      </div>
    )
}
export default Login