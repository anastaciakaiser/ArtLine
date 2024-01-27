import React from 'react';
import './Footer.css';

const Footer = ({ socialMediaIcons }) => {
  return (
    <footer className="footer-container">
      {/* First Row */}
      <div className="social-media">
        {socialMediaIcons.map((icon, index) => (
          <a key={index} href={`link-to-your-social-media-profile-${index + 1}`} 
            target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={`Social Media ${index + 1}`} />
          </a>
        ))}
      </div>

      {/* Second Row */}
      <div className="footer-text">
        <p>Copyright © 2023 ArtLine Inc. All rights reserved.</p>
        <div className="mini-menu">
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Term of use</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
