import React from "react";
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './DoctorGrid.css'
const DoctorGrid=()=>
{
    return(
        <div class="row">
            {/* First doctor */}
            <div class="colomn">
                <div class="container mt-5 d-flex justify-content-center">
                    <div class="card p-4 mt-3">
                        <div class="first">
                            <h6 class="heading">Exquisite hand henna tattoo</h6>
                            <div class="time d-flex flex-row align-items-center justify-content-between mt-3">
                                <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">3 hrs</span> </div>
                                <div> <span class="font-weight-bold">999 Rs.</span> </div>
                            </div>
                        </div>
                        <div class="second d-flex flex-row mt-2">
                            <div class="image mr-3"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="60" /> </div>
                            <div class="">
                                <div class="d-flex flex-row mb-1"> <span>@hairtaje</span>
                                    <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                </div>
                                <div> <button class="btn btn-outline-dark btn-sm px-2">+ follow</button> <button class="btn btn-outline-dark btn-sm">See Profile</button> <button class="btn btn-outline-dark btn-sm"><i class="fa fa-comment-o"></i></button> </div>
                            </div>
                        </div>
                        <hr class="line-color"/>
                        <h6>48 comments</h6>
                        <div class="third mt-4"> <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* second Doctor */}
            <div class="colomn">
                <div class="container mt-5 d-flex justify-content-center">
                    <div class="card p-4 mt-3">
                        <div class="first">
                            <h6 class="heading">Exquisite hand henna tattoo</h6>
                            <div class="time d-flex flex-row align-items-center justify-content-between mt-3">
                                <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">3 hrs</span> </div>
                                <div> <span class="font-weight-bold">999 Rs.</span> </div>
                            </div>
                        </div>
                        <div class="second d-flex flex-row mt-2">
                            <div class="image mr-3"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="60" /> </div>
                            <div class="">
                                <div class="d-flex flex-row mb-1"> <span>@hairtaje</span>
                                    <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                </div>
                                <div> <button class="btn btn-outline-dark btn-sm px-2">+ follow</button> <button class="btn btn-outline-dark btn-sm">See Profile</button> <button class="btn btn-outline-dark btn-sm"><i class="fa fa-comment-o"></i></button> </div>
                            </div>
                        </div>
                        <hr class="line-color"/>
                        <h6>48 comments</h6>
                        <div class="third mt-4"> <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Third Doctor */}
            <div class="colomn">
                <div class="container mt-5 d-flex justify-content-center">
                    <div class="card p-4 mt-3">
                        <div class="first">
                            <h6 class="heading">Exquisite hand henna tattoo</h6>
                            <div class="time d-flex flex-row align-items-center justify-content-between mt-3">
                                <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">3 hrs</span> </div>
                                <div> <span class="font-weight-bold">999 Rs.</span> </div>
                            </div>
                        </div>
                        <div class="second d-flex flex-row mt-2">
                            <div class="image mr-3"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="60" /> </div>
                            <div class="">
                                <div class="d-flex flex-row mb-1"> <span>@hairtaje</span>
                                    <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                </div>
                                <div> <button class="btn btn-outline-dark btn-sm px-2">+ follow</button> <button class="btn btn-outline-dark btn-sm">See Profile</button> <button class="btn btn-outline-dark btn-sm"><i class="fa fa-comment-o"></i></button> </div>
                            </div>
                        </div>
                        <hr class="line-color"/>
                        <h6>48 comments</h6>
                        <div class="third mt-4"> <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Forth Doctor */}
            <div class="colomn">
                <div class="container mt-5 d-flex justify-content-center">
                    <div class="card p-4 mt-3">
                        <div class="first">
                            <h6 class="heading">Exquisite hand henna tattoo</h6>
                            <div class="time d-flex flex-row align-items-center justify-content-between mt-3">
                                <div class="d-flex align-items-center"> <i class="fa fa-clock-o clock"></i> <span class="hour ml-1">3 hrs</span> </div>
                                <div> <span class="font-weight-bold">999 Rs.</span> </div>
                            </div>
                        </div>
                        <div class="second d-flex flex-row mt-2">
                            <div class="image mr-3"> <img src="https://i.imgur.com/0LKZQYM.jpg" class="rounded-circle" width="60" /> </div>
                            <div class="">
                                <div class="d-flex flex-row mb-1"> <span>@hairtaje</span>
                                    <div class="ratings ml-2"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div>
                                </div>
                                <div> <button class="btn btn-outline-dark btn-sm px-2">+ follow</button> <button class="btn btn-outline-dark btn-sm">See Profile</button> <button class="btn btn-outline-dark btn-sm"><i class="fa fa-comment-o"></i></button> </div>
                            </div>
                        </div>
                        <hr class="line-color"/>
                        <h6>48 comments</h6>
                        <div class="third mt-4"> <button class="btn btn-success btn-block"><i class="fa fa-clock-o"></i> Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DoctorGrid