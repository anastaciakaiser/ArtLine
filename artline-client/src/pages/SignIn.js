import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignIn.css';
import logo from '../assets/logo_full.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/fb.png';

export default function SignIn() {
  const [saveUser, setSaveUser] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setSaveUser(!saveUser);
  };

  const handleLogin = async () => {
    // Replace the following with your actual login logic (API call or authentication method)
    try {
      // Example: Simulating a successful login after a short delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Login successful');
      
      // Redirect to the main page after successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
      // Handle login failure, show error messages, etc.
    }
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
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                  type={saveUser ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signin-checkbox" onClick={handleCheckboxChange}>
                <input type="checkbox" id="keepLoggedIn" />
                <label htmlFor="keepLoggedIn" className={saveUser ? "checked" : ""}>
                  Save user
                </label>
                <span className="forgot-password-link">
                  <a href="#">Forgot your password?</a>
                </span>
              </div>
              <button className="login-button" onClick={handleLogin}>
                Log In
              </button>
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
              <Link to="/signup">Sign up</Link>
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
