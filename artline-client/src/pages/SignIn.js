import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import logo from '../assets/logo_full.png'; 
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/fb.png';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <Link to='/' className='site-logo-full'>
            <img className="home-icon" src={logo} alt="logo" />
        </Link>
        <div className="signin-left">
          <h2 className='left-text-big'>Dive<br />into<br />the<br />ocean<br />of<br />Comics</h2>
          <p className='left-text-small'>Unique graphic narratives by solitary artists spanning the globe, complemented by a large community eager for discussions new creations WAITS FOR YOU.</p>
        </div>
        <div className="signin-right">
          <div className="login-container">
            <h1 className='login-text'>Log In</h1>
            <div className="form-input">
              <div className="input-wrapper">
                <label htmlFor="username">Username/Email</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type={showPassword ? "text" : "password"} id="password" />
              </div>
              <div className="signin-checkbox" onClick={handleCheckboxChange}>
                <input type="checkbox" id="keepLoggedIn" />
                <label htmlFor="keepLoggedIn" className={showPassword ? "checked" : ""}>Show Password</label>
                <span className="forgot-password-link">
                  <a href="#">Forgot your password?</a>
                </span>
              </div>
              <button className="login-button">Log In</button>
            </div>
          </div>
          <div className="signin-social">
            <p className='login-with-text'>Or Log in with</p>
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
          <div className="new-on-artline">
            <p>New on Artline?</p>
            <p>
              <a href="#">Sign up</a>
            </p>
          </div>          
          <div className="footer-text-login">
            <div className="mini-menu-login">
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
