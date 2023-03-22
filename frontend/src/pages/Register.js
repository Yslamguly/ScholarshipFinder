import React from 'react';
import BasicTextField from '../components/Login-Register/BasicTextField';
import BasicButton from '../components/Login-Register/BasicButton';
import UnderlineLink from '../components/Login-Register/UnderlineLink';
import './Register.css';

export default function Register() {
    return (
      <div className='container'>
        <h1>Register</h1>
        <div className='text-container'>
            <BasicTextField label="Name"/>
            <BasicTextField label="Email"/>
            <BasicTextField label="Password"/>
        </div>
        <div className='button'>
        <BasicButton />
        </div>
        <UnderlineLink />
      </div>
    );
  }
