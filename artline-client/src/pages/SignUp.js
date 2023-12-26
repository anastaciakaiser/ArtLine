import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logo from '../assets/logo_full.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/fb.png';

export default function SignUp() {
  const [saveUser, setSaveUser] = useState(false);

  const handleCheckboxChange = () => {
    setSaveUser(!saveUser);
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
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type={saveUser ? "text" : "password"} id="password" />
              </div>
              {/* Новый блок для повторного ввода пароля */}
              <div className="input-wrapper">
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type={saveUser ? "text" : "password"} id="repeatPassword" />
              </div>
              <div className="signup-checkbox" onClick={handleCheckboxChange}>
                <input type="checkbox" id="keepLoggedIn" />
                <label htmlFor="keepLoggedIn" className={saveUser ? "checked" : ""}>
                  Save user
                </label>
              </div>
              <button className="singup-button">Sign Up</button>
            </div>
          </div>
          <div className="signup-social">
            <p className='singup-with-text'>Or sing up now with</p>
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
