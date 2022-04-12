import axios from 'axios';
import React, { useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import './Prescription.css'

const SendPrescription = () => {
const[prescription,setPrescription] = useState({});

    var {username} = useParams();
var navigate = useNavigate()

const sendPrescription= async ()=>{
  await axios.post("http://localhost:8080/dashboard/doctor/sendprescription",{})
    navigate(`/dashboard/doctor/${username}`);
}

const handleInput=(e)=>{
  var name = e.target.name;
  var value = e.target.value;
  setPrescription({...prescription,[name] : value})
}
  return (
    <div className='container'>
      <form action="" className="form">
        Patient Username<input type="text" name='patientName' placeholder='enter the patient Name' onChange={handleInput}/>
        <p></p>
        Medicine Name1<input type="text" name="medicineFirst" onChange={handleInput}/>
        <p></p>
        Medicine Name 2<input type="text" name="medicineSecond"onChange={handleInput} />
        <p></p>
        Lab Test Name<input type="text" name='lavTestName' placeholder='Enter lab test' onChange={handleInput}/>
        <p></p>
        Dose/Day<input type="text" name='dosePerDay' placeholder='Enter the doses per day'onChange={handleInput}/>
        <p></p>
        Visit After<input type="date" name='dayToVist' placeholder='Enter the days after visit' className='' onChange={handleInput}/>
        <p></p>
        <Link className='btn btn-primary btn-lg btn send-btn' onClick={sendPrescription} to="/Dashboard" >Send and Navigate to Dashboard</Link>
      </form>
    </div>
  )
}

export default SendPrescription