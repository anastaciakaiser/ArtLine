// ArtistHome.js
import React, { useState } from 'react';
import './ArtistHome.css';
import followIcon from '../assets/follow_icon.png';
import subscribeIcon from '../assets/subscribe_icon.png';
import avatarImage from '../assets/avatar_creator_tem.jpg';

const ArtistHome = ({ socialMediaIcons }) => {
  const [isPostInputActive, setPostInputActive] = useState(false);

  const handlePostInputClick = () => {
    setPostInputActive(true);
  };

  const handlePostInputBlur = () => {
    setPostInputActive(false);
  };

  return (
    <div className="artist-home">
      <div className="header">Header</div>
      <div className="content">
        <div className="left-block">
          <div className="avatar">
            <img src={avatarImage} alt="Artist Avatar" />
          </div>
          <div className="followers">Followers</div>
            <div className='follow-and-sub-btns'>
              <button className="follow-button">
                <img src={followIcon} alt="Follow img"/>
                Follow
              </button>
              <button className="subscribe-button">
                <img src={subscribeIcon} alt="Subscribe img"/>
                Subscribe
              </button>
            </div>
          <div className="social-links">
            {socialMediaIcons &&
              socialMediaIcons.map((icon, index) => (
                <a
                  key={index}
                  href={`link-to-your-social-media-profile-${index + 1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={`Social Media ${index + 1}`} />
                </a>
              ))}
          </div>
          <div className="title">Series</div>
          <div className="series-info">
            <img src="link-to-comics-img.png" alt="Comics_img" />
            <div>
              <p>Comics title</p>
              <p>Genre</p>
            </div>
          </div>
        </div>
        <div className={`right-block ${isPostInputActive ? 'active' : ''}`}>
          <div
            className="post-input"
            contentEditable={true}
            onClick={handlePostInputClick}
            onBlur={handlePostInputBlur}
          >
          </div>
          {isPostInputActive && (
            <div className="post-options">
              <img src="link-to-img-icon.png" alt="Add Image" />
              <img src="link-to-audio-icon.png" alt="Add Audio" />
              <img src="link-to-video-icon.png" alt="Add Video" />
              <button className="post-button">Post</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistHome;
