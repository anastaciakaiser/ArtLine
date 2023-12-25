import React from 'react';
import './ArtistsBlock.css';

const ArtistsBlock = ({ artistsData }) => {
  return (
    <div className="artists-block-container">
      <h2 className="artists-block-title">Top artists</h2>
      <div className="artists-blocks">
        {artistsData.map((artist, index) => (
          <div key={index} className="artists-row">
            <div className="artists-block">
              <div className="artist-content">
                <img src={artist.image} alt="Artist" className="artist-image" />
                <div className="artist-info">
                  <h3 className="artist-title">{artist.title}</h3>
                  <div className="artist-buttons">
                    <button className="artist-button-read">Read</button>
                    <button className="artist-button-subscribe">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsBlock;
