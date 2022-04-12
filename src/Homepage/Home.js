import React from 'react';
import './Home.css'
import {useNavigate} from 'react-router-dom'
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
import Features from './Features/Features';
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
                {/* Middle Content Card code */}
                
                {/* <div class="extra-margin-5">
                    <div class="Container-fluid mt-5">
                        <div class="mt-1 text-center">
                            <div class="text-info">
                                <h2>Our Doctors</h2>
                            </div>
                            <div class="text-secondary">
                                <p>lorem</p>
                            </div>
                            
                        </div>
                        <div class="row justify-content-md-center mt-4">
                            <div class="row">
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-one"></div>
                                        <div class="product-text">
                                            <h3>Dr. Sharma</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-two"></div>
                                        <div class="product-text">
                                            <h3>Dr. Chourasia</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-three"></div>
                                        <div class="product-text">
                                            <h3>Dr. Anamika</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="product-card">
                                    <div class="product-img img-four"></div>
                                        <div class="product-text">
                                            <h3>Dr. Naveen</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="product-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </div> */}
            
            </div>
  
            <div>
                <Features/>
            </div>
            <div class="mt-5">
                <Footer/>
            </div>
        </div>
        
        
        
   )
}
export default Home;