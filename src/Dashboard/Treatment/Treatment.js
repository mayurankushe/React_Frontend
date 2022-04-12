import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';
const Treatment = () => {
  const navigate = useNavigate();
  const[treatList,setTreatList]= useState([]);
    var { presId } = useParams();
  
    useEffect(()=>{
        treatment();
    })
    const treatment= async (e)=>{
      e.preventDefault();
      await axios.get("http://localhost:8080/patientdashboard/treatment/"+presId).then((Response)=>{
       
          console.log(Response.data)
          setTreatList(Response.data);
  

      }).catch((err)=>{
        console.log(err)
      })
    }
    console.log(treatList); 


  return (
    <div> { !sessionStorage.getItem("token") ? <Navigate to="/login/patient/" /> : 
    <div>
        <button onClick={treatment}>Treatment Details</button>
        <div>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
      
        treatList.map((item)=>{
          return(
          <tr>
          <td>{item.prescid}</td>
          <td>{item.medicine1}</td>
          <td>{item.medicine2}</td>
          <td>{item.dose_per_day}</td>
          </tr>
         )})
    
    }
  </tbody>
</table>
        </div>
    </div>}
  </div>
  )
}

export default Treatment