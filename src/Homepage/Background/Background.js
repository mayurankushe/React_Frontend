import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar/Navbar.css';
const Background=()=>
{
    return(
        <div class="d-flex flex-column justify-content-center w-100 h-100">
            <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="row featurette container-fluid pt-3 pb-4">
                    
                    <div class="col-md-7 d-flex justify-content-center align-items-center">
                   
                    <div className='d-flex flex-column'>
                            <Link to="/login/patient" className='btn btn-primary rounded-pill px-5 mb-4 glass btn-lg'>Book appointment</Link>
                            <Link to='/' className='btn btn-secondary rounded-pill px-5 mb-4 glass1'>Buy Medicine</Link>
                            <Link to='/' className='btn btn-danger rounded-pill px-5 mb-4 glass2'>Book LabTest</Link>
                    </div> 
                    </div>
                    <div class="col-md-5  ">
                        <img src="doctor.png" alt="" width="Auto" height="100%"/>
                    </div>
                </div>
                <div>
                <hr/>
                </div>
                
                <div class="row">
                    <div class="col-md-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="col-md-3"> 
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="col-md-3"> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div class="col-md-3">
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Menu 1</a></li>
                        <li><a href="#">Menu 2</a></li>
                        <li><a href="#">Menu 3</a></li>
                    </ul>
                    </div>
                    <div class="clearfix visible-lg"></div>
                </div>
    

                {/* Middle Content Card code */}
                <div class="extra-margin-5">
                    <div class="Container-fluid">
                        <div class="row justify-content-md-center">
                            <div class="row">
                                <div class="col">
                                <div class="doctor-card">
                                    <div class="doctor-img">
                                        <img src="" alt='Doctor'/>
                                    </div>
                                        <div class="doctor-text">
                                            <h3>Dr. Kurkure</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="doctor-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="doctor-card">
                                    <div class="doctor-img img-one"></div>
                                        <div class="doctor-text">
                                            <h3>Dr. Desai</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="doctor-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="doctor-card">
                                    <div class="doctor-img img-one"></div>
                                        <div class="doctor-text">
                                            <h3>Dr. Roy</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="doctor-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="doctor-card">
                                    <div class="doctor-img img-one"></div>
                                        <div class="doctor-text">
                                            <h3>Dr. Ankushe</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="doctor-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                <div class="doctor-card">
                                    <div class="doctor-img img-one"></div>
                                        <div class="doctor-text">
                                            <h3>Dr. Patil</h3>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt excepturi totam ducimus, nemo tenetur, quibusdam accusamus neque deserunt aliquid perferendis.</p>
                                        </div>
                                        <div class="doctor-cart">
                                            <button type="submit">Connect With Doctor</button>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default Background