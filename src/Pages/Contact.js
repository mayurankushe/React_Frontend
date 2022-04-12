import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Homepage/Footer';

const Contact=()=>{
    return(
        // <div className='bag-img' >
        //     <form className= ' d-flex flex-column justify-content-center align-items-center shadow login-form' >
        //         <div class="form-group ">
        //             <label for="exampleInputEmail1">Email address</label>
        //             <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        //         </div>
        //         <div class="form-group">
        //             <label for="exampleInputPassword1">Message</label>
        //             <input  type="text" class="form-control mb-5" id="exampleInputPassword1" placeholder="Password"/>
        //         </div>
            
        //         <button type="submit" class="btn btn-primary">Submit</button>
        //     </form>
        // </div>
        <div>
            <div class="d-flex justify-content-center align-items-center mb-10 bag-img">
                <form class="m-5 shadow custom-margin login-form">
                    <div class="text-info">
                    <h2>HOSPIFY</h2>
                    </div>
                <div class="form-group mb-3">
                <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group mb-4 ">
                <label for="exampleInputPassword1">Message</label>
                    <input type="text" class="form-control mb-5" id="message" placeholder="Type your message here."/>
                </div>
                <button type="submit" class="btn btn-primary rounded-pill mb-3  w-75" >Submit</button>
                
                <div className='form-group'>
            
                </div>
            </form>
            </div>
            <div>
            <Footer/>
        </div>
     </div>
    )
}

export default Contact;