import React, {useState} from 'react';
import BasicTextField from '../components/Login-Register/BasicTextField';
import PasswordField from '../components/Login-Register/PasswordField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import axios from 'axios';
import './Register.css';
// require('dotenv').config();


export default function Register() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // const handleEmailFromChild = (value) => {
  //   setEmailFromChild(value);
  //   // console.log(email);
  // };
  //
  //
  // const handleNameFromChild = (value) => {
  //   setNameFromChild(value);
  //   // console.log(name);
  // };
  //
  //
  // const handlePasswordFromChild = (value) => {
  //   setPasswordFromChild(value);
  //   console.log(password);
  // };


  const onSignInClick = () => {
    // console.log('Sending fields');
    // console.log(name)
    // console.log(email)
    // console.log(password)
    axios.post('http://localhost:8080/users/register', {
      name: name,
      email: email,
      password: password
    })
    .then(response => {
      // Handle the successful response from the server
      console.log(response.data);
      setSuccessMessage("Registration successful!");
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
      setErrorMessage("Registration failed!");
    });

  }



  return (
    <div  style={{ display: "flex", justifyContent: "center",flexDirection:"column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {errorMessage && !successMessage && <Alert severity="error" sx={{ width: "500px"}} onClose={() => {setErrorMessage(null)}}>{errorMessage}</Alert>}
        {successMessage && !errorMessage && <Alert sx={{ width: "500px"}} onClose={() => {setSuccessMessage(null)}}>{successMessage}</Alert>} 
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
        <Link sx={{ fontSize:"14px", marginTop:"10px"}} href="#" underline="always">
        {'Already have an account? Sign in'}
        </Link>
      </div>
      </div>
    );
  }
