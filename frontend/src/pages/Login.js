import React, {useState} from 'react';
import BasicTextField from '../components/Login-Register/BasicTextField';
import PasswordField from '../components/Login-Register/PasswordField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import axios from 'axios';
import '../styles/Login.css';
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../utils/auth/UserContext";
import {ErrorAlert} from "../components/Alerts/ErrorAlert";
import {SuccessAlert} from "../components/Alerts/SuccessAlert";


export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)
    const {setUser} = useAuth();

    const onSignInClick = () => {
        axios.post('http://localhost:8080/users/login', {
            email: email,
            password: password
        })
            .then(response => {
                sessionStorage.setItem('user', JSON.stringify(response.data))
                setUser(sessionStorage.getItem('user'))
                setAlertMessage("Logged in successfully!");
                setShowSuccess(true)
                setTimeout(() => {
                    navigate("/home");
                }, 1200);
            })
            .catch(error => {
                setAlertMessage("Login failed! " + error.response.data.error);
                setShowError(true)
            });

    }


    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ErrorAlert showError={showError} setShowError={(bool) => setShowError(bool)} message={alertMessage}/>
                <SuccessAlert showSuccess={showSuccess} message={alertMessage}
                              setShowSuccess={(bool) => setShowSuccess(bool)}/>
            </div>
            <div className='container'>
                <h1>Login</h1>
                <div className='text-container'>

                    <BasicTextField label="Email" type="email" setText={(email) => setEmail(email)} text={email}/>

                    <PasswordField label="Password" setPassword={(password) => setPassword(password)}
                                   password={password}/>
                </div>
                <div className='button'>
                    <Button sx={{width: "430px", height: "35px"}} variant="contained" type='button'
                            onClick={onSignInClick}>Login</Button>
                </div>
                <Link sx={{fontSize: "14px", marginTop: "10px"}} href="/register" underline="always">
                    {'I do not have an account? Sign in'}
                </Link>
            </div>
        </div>
    );
}
