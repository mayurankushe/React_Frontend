import React, { useState } from 'react'
import './LoginDoctor.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Footer from '../Homepage/Footer';
const LoginDoctor =( )=>{
  
  const [doctorLogin,setDoctorLogin] = useState({username: "", password :""});
  // const [error,setError] = useState('');
       const navigate = useNavigate();


       
 const handleSubmit=async (e)=>{
  e.preventDefault();
  
    await axios.post("http://localhost:8080/login/doctor",{
      username : doctorLogin.username , 
      password : doctorLogin.password,
    }).then( (response)=>{
    console.log(response.data);

    if(response.data === "valid")
    {
    //   sessionStorage.setItem("login-info",JSON.stringify(doctorLogin.username));
      // window.location=`/dashboard/${doctorLogin.username}`;
      setDoctorLogin({username : '',password : ''})
      navigate(`/dashboard/doctor/${doctorLogin.username}`);
      
      
    }
    else{
      setDoctorLogin({username: '', password: '' });
      // setError('invalid Username and Password');
    
    }
  }).catch((err)=>{
    console.log(err.response);
  })


}
const handleInput=(e)=>{
  var name = e.target.name;
  var value = e.target.value;
  setDoctorLogin({...doctorLogin,[name] : value})

}
  return(
     <div>
        <div class="container-fluid d-flex justify-content-center align-items-center bag-img">
            <form className='m-5 shadow login-form' onSubmit={handleSubmit}>
              {/* <span>{error}</span> */}
              <div class="form-group mb-3">
                <div class="text-center brand-name">
                    <h2>HOSPIFY</h2>
                   
                </div>
                <label className='mb-2'>Username</label>
                <input type="text"  class="form-control" placeholder="Enter Username" name='username' required onChange={handleInput}/>
              </div>
              <div class="form-group mb-4 ">
                <label  className='mb-2'>Password</label>
                <input type="password"  class="form-control" placeholder="Password" name='password' required onChange={handleInput}/>
              </div>
            <button type="submit" class="btn btn-primary rounded-pill mb-3  w-75 shadow-sm" >Login</button>
            <div className='form-group '>New To Hospify, <a href="/register/patient">Create New Account</a>  
          
            </div>
          </form>
        </div>
        <div><Footer/></div>
     </div>
    )
}
export default LoginDoctor;