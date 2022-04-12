import React from 'react';
import './Home.css'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
import Features from './Features/Features';
import PatientDashboard from '../Dashboard/PatientDashboard/PatientDashboard';

const Home=()=>
{
    const navigate = useNavigate();
    const bookAppointment=()=>
    {
        navigate.push("localhost:3000/login/patient")
    }
    return(
        <div>
            <div className='body'>
                <div class="slider-color">
                    <div class="row featurette container-fluid pt-3 pb-4">
                        
                        <div class="col-md-7 d-flex justify-content-center align-items-center">
                        
                        <div className='d-flex flex-column'>
                        <div class="text-warning">
                            <h2>Welcome To The New Era Of Hospitality</h2>
                        </div>
                                <Link to="/login/patient" className='btn btn-primary rounded-pill px-5 mb-4 btn-lg shadow-sm'>Book appointment</Link>
                                <Link to='/' className='btn btn-secondary rounded-pill px-5 mb-4 btn-lg shadow-sm'>Buy Medicine</Link>
                                <Link to='/' className='btn btn-danger rounded-pill px-5 mb-42 btn-lg shadow-sm'>Book LabTest</Link>
                        </div> 
                        </div>
                        <div class="col-md-5  ">
                            <img src="doctors2.png" alt="" width="80%" height="auto"/>
                        </div>
                    </div>
                </div>
                
            
            </div>
  
            <div>
                <Features/>
            </div>
           {/* <div>
               <PatientDashboard/>
           </div> */}
            <div class="mt-5">
                <Footer/>
            </div>
        </div>
        
        
        
   )
}
export default Home;