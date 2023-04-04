import React, {useState} from 'react';
import BasicTextField from '../components/Login-Register/BasicTextField';
import PasswordField from '../components/Login-Register/PasswordField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const onSignInClick = () => {
      axios.post('http://localhost:8080/users/login', {
        email: email,
        password: password
      })
      .then(response => {
        // Handle the successful response from the server
        console.log(response.data);
        setSuccessMessage("Loging successful!");
        setErrorMessage(null);
        navigate("/home");
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
        setErrorMessage("Loging failed! "+ error.response.data.message);
        setSuccessMessage(null);
      });
  
    }
  
  
  
    return (
      <div  style={{ display: "flex", justifyContent: "center",flexDirection:"column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {errorMessage && !successMessage && <Alert severity="error" sx={{ width: "500px"}} onClose={() => {setErrorMessage(null)}}>{errorMessage}</Alert>}
          {successMessage && !errorMessage && <Alert sx={{ width: "500px"}} onClose={() => {setSuccessMessage(null)}}>{successMessage}</Alert>} 
        </div>
        <div className='container'>
          <h1>Login</h1>
          <div className='text-container'>
  
              <BasicTextField label="Email" type="email" setText={(email)=>setEmail(email)} text={email}/>
  
              <PasswordField label="Password" setPassword={(password)=>setPassword(password)} password={password}/>
          </div>
          <div className='button'>
            <Button sx={{ width: "430px", height: "35px" }} variant="contained" type='button' onClick={onSignInClick} >Login</Button>
          </div>
          <Link sx={{ fontSize:"14px", marginTop:"10px"}} href="/register" underline="always">
          {'I do not have an account? Sign in'}
          </Link>
        </div>
        </div>
      );
    }
  