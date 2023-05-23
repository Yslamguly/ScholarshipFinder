import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTextField from '../components/Login-Register/BasicTextField';
import PasswordField from '../components/Login-Register/PasswordField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import axios from 'axios';
import '../styles/Register.css';
import {ErrorAlert} from "../components/Alerts/ErrorAlert";
import {SuccessAlert} from "../components/Alerts/SuccessAlert";
import {useAuth} from "../utils/auth/UserContext";


export default function Register() {


  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const {setUser} = useAuth();

  const onSignInClick = () => {
    axios.post('http://localhost:8080/users/register', {
      name: name,
      email: email,
      password: password
    })
    .then((response) => {
      sessionStorage.setItem('user', JSON.stringify(response.data))
      setUser(sessionStorage.getItem('user'))
      setAlertMessage("Registration successful!");
      setShowSuccess(true);
      setTimeout(()=>{
        navigate("/")},1200)
    })
    .catch(error => {
      console.error(error);
      setAlertMessage("Registration failed! "+ error.response.data.error);
      setShowError(true);
    });

  }



  return (
    <div  style={{ display: "flex", justifyContent: "center",flexDirection:"column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ErrorAlert showError={showError} setShowError={(bool) => setShowError(bool)} message={alertMessage}/>
        <SuccessAlert showSuccess={showSuccess} message={alertMessage}
                      setShowSuccess={(bool) => setShowSuccess(bool)}/>
      </div>
      <div className='container'>
        <h1>Register</h1>
        <div className='text-container'>
            <BasicTextField label="Name" type="text" setText={(name)=>setName(name)} text={name}/>

            <BasicTextField label="Email" type="email" setText={(email)=>setEmail(email)} text={email}/>

            <PasswordField label="Password" setPassword={(password)=>setPassword(password)} password={password}/>
        </div>
        <div className='button'>
          <Button sx={{ width: "430px", height: "35px" }} variant="contained" type='button' onClick={onSignInClick} >Sign Up</Button>
        </div>
        <Link sx={{ fontSize:"14px", marginTop:"10px"}} href="/login" underline="always">
        {'Already have an account? Sign in'}
        </Link>
      </div>
      </div>
    );
  }
