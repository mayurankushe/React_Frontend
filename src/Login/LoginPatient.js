import React, { useState } from 'react'
import './LoginPatient.css';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'
import PatientDashboard from '../Dashboard/PatientDashboard/PatientDashboard';
import Authenticate from './Authenticate';
import Footer from '../Homepage/Footer';

const LoginPatient =()=>{
  
  const [patientLogin,setPatientLogin] = useState({username: "", password :""});

  const navigate = useNavigate();


       
 const handleSubmit=async (e)=>{
  e.preventDefault();
  
    await axios.post("http://localhost:8080/login/patient",{
      username : patientLogin.username , 
      password : patientLogin.password,
    }).then( (response)=>{
    console.log(response.data);

    if(response.data === "valid")
    {
      Authenticate.loggedIn(patientLogin.username);
      
      navigate(`/dashboard/patient/${patientLogin.username}`);
      setPatientLogin({username : '',password : ''})
    }
    else{
      setPatientLogin({username: '', password: '' });    
    }
  }).catch((err)=>{
    console.log(err.response);
  })
}

const handleInput=(e)=>{
  var name = e.target.name;
  var value = e.target.value;
  setPatientLogin({...patientLogin,[name] : value})

}

   
    return(
     <div>
        <div class="d-flex justify-content-center align-items-center mb-10 bag-img">
        <form class="m-5 shadow custom-margin login-form" onSubmit={handleSubmit}>
          <div class="brand-name">
          <h2>HOSPIFY</h2>
          </div>
          <div class="form-group mb-3">
            <label className='mb-2'>Username</label>
            <input type="text"  class="form-control" placeholder="Enter Username" name='username' required onChange={handleInput}/>
          </div>
          <div class="form-group mb-4 ">
            <label  className='mb-2'>Password</label>
            <input type="password"  class="form-control" placeholder="Password" name='password' required onChange={handleInput}/>
          </div>
        <button type="submit" class="btn btn-primary rounded-pill mb-3  w-75" >Login</button>
        
        <div className='form-group '>
        <Link to={'/login/patient/forgotpassword'} class=""> Forgot Password</Link>
        <p></p>
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
export default LoginPatient;