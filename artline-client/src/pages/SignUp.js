// pages/SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import logo from '../assets/logo_full.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/fb.png';
import { Input, Tooltip } from 'antd';
import api from '../services/api/api';

export default function SignUp() {
  const navigate = useNavigate(); 
  const [saveUser, setSaveUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({
    email: { isValid: true, msg: '' },
    password: { isValid: true, msg: '' },
    repeatPassword: { isValid: true, msg: '' },
  });

  const handleCheckboxChange = () => {
    setSaveUser(!saveUser);
  };

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const isValid = email.trim() !== '' && emailRegex.test(email);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: { isValid, msg: isValid ? '' 
      : 'Email is required and must be valid!' },
    }));
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.trim() !== '' && password.length >= 6;
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: { isValid, msg: isValid ? '' 
      : 'Password is required and must be at least 6 characters!' },
    }));
    return isValid;
  };

  const validateRepeatPassword = () => {
    const isValid = repeatPassword.trim() !== '' && repeatPassword === password;
    setErrors((prevErrors) => ({
      ...prevErrors,
      repeatPassword: { isValid, msg: isValid ? '' 
      : 'Passwords do not match!' },
    }));
    return isValid;
  };

  const handleSubmit = async () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isRepeatPasswordValid = validateRepeatPassword();

    if (isEmailValid && isPasswordValid && isRepeatPasswordValid) {
      try {
        const userData = { email, password, repeatPassword };
        const response = await api.register(userData);

        console.log('Sign-up successful', response);

        navigate('/account-settings'); // Redirect to AccountSettings after successful registration

      } catch (error) {
        console.error('Registration failed', error);
      }
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <Link to='/' className='site-logo-full'>
          <img className="home-icon" src={logo} alt="logo" />
        </Link>
        <div className="signup-left">
          <h2 className='left-text-big'>Dive<br />into<br />the<br />ocean<br />of<br />Comics</h2>
          <p className='left-text-small'>Unique graphic narratives by solitary artists spanning the globe, complemented by a large community eager for discussions new creations WAITS FOR YOU.</p>
        </div>
        <div className="signup-right">
          <div className="singup-container">
            <h1 className='singup-text'>Sign Up</h1>
            <div className="form-input">
              <div className="input-wrapper">
                <label htmlFor="username">Email</label>
                <Tooltip title={errors.email.msg} visible={!errors.email.isValid} color="#2A2A2A">
                  <Input
                    type="text"
                    id="username"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={validateEmail}
                  />
                </Tooltip>
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <Tooltip title={errors.password.msg} visible={!errors.password.isValid} color="#2A2A2A">
                  <Input
                    type={saveUser ? "text" : "password"}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={validatePassword}
                  />
                </Tooltip>
              </div>
              {/* Repeat Password validation */}
              <div className="input-wrapper">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <Tooltip title={errors.repeatPassword.msg} visible={!errors.repeatPassword.isValid} color="#2A2A2A">
                  <Input
                    type={saveUser ? "text" : "password"}
                    id="repeatPassword"
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    onBlur={validateRepeatPassword}
                  />
                </Tooltip>
              </div>
              <div className="signup-checkbox" onClick={handleCheckboxChange}>
                <input type="checkbox" id="keepLoggedIn" />
                <label htmlFor="keepLoggedIn" className={saveUser ? "checked" : ""}>
                  Save user
                </label>
              </div>
              <button className="singup-button" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="signup-social">
            <p className='singup-with-text'>Or sign up now with</p>
            <div className="social-buttons">
              <div>
                <button className="google-button">
                  <img src={googleIcon} alt="Google Logo" className="social-icon" />
                  Continue With Google
                </button>
              </div>
              <div>
                <button className="facebook-button">
                  <img src={facebookIcon} alt="Facebook Logo" className="social-icon" />
                  Continue With Facebook
                </button>
              </div>
            </div>
          </div>
          <div className="already-have-an-account">
            <p>Already have an account?</p>
            <p>
              <Link to="/login">Log in</Link>
            </p>
          </div>
          <div className="footer-text-signup">
            <div className="mini-menu-signup">
              <a href="#">About</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Term of use</a>
              <a href="#">Site Map</a>
            </div>
            <p>Copyright © 2023 ArtLine Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
