import React, {useState} from 'react';
import BasicTextField from '../components/Login-Register/BasicTextField';
import PasswordField from '../components/Login-Register/PasswordField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import axios from 'axios';
import './Register.css';
// require('dotenv').config();


export default function Register() {

  const [email, setEmailFromChild] = useState('');
  const [name, setNameFromChild] = useState('');
  const [password, setPasswordFromChild] = useState('');

  const handleEmailFromChild = (value) => {
    setEmailFromChild(value);
    // console.log(email);
  };


  const handleNameFromChild = (value) => {
    setNameFromChild(value);
    // console.log(name);
  };


  const handlePasswordFromChild = (value) => {
    setPasswordFromChild(value);
    console.log(password);
  };


  const onSignInClick = () => {
    console.log('Sending fields');
    axios.post('http://localhost:8080//users/register', {
      name: name,
      email: email,
      password: password

    })
    .then(response => {
      // Handle the successful response from the server
      console.log(response.data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });

  }
  
    

  return (
      <div className='container'>
        <h1>Register</h1>
        <div className='text-container'>
            <BasicTextField label="Name" type="text" onData={handleNameFromChild}/>
            <BasicTextField label="Email" type="email" onData={handleEmailFromChild}/>
            <PasswordField label="Password" onData={handlePasswordFromChild}/>
        </div>
        <div className='button'>
          <Button sx={{ width: "430px", height: "35px" }} variant="contained" type='button' onClick={() => onSignInClick} >Sign Up</Button>
        </div>
        <Link sx={{ fontSize:"14px", marginTop:"10px"}} href="#" underline="always">
        {'Already have an account? Sign in'}
        </Link>
      </div>
    );
  }
