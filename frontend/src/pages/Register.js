import React from 'react';
import BasicTextField from '../components/Login-Register/BasicTextField';
import BasicButton from '../components/Login-Register/BasicButton';
import PasswordField from '../components/Login-Register/PasswordField';
import UnderlineLink from '../components/Login-Register/UnderlineLink';
import './Register.css';

export default function Register() {
    return (
      <div className='container'>
        <h1>Register</h1>
        <div className='text-container'>
            <BasicTextField label="Name" type="text"/>
            <BasicTextField label="Email" type="email"/>
            <PasswordField label="Password"/>
        </div>
        <div className='button'>
        <BasicButton />
        </div>
        <UnderlineLink />
      </div>
    );
  }
