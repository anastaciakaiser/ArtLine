import React from 'react';
import './styles.css';
import Slider from '../components/Slider';
import CardSlider from '../components/CardSlider';
import ArtistsBlock from '../components/ArtistsBlock';

export default function Home() {
  const slides = [
    require('../assets/blur_background1.jpg'),
    require('../assets/blur_background1.jpg'),
    require('../assets/blur_background1.jpg'),
  ];

  const mainBanners = [
    require('../assets/main_banner.png'),
    require('../assets/main_banner.png'),
    require('../assets/main_banner.png'),
  ];

  const cardSlides = [
    require('../assets/new1.jpg'),
    require('../assets/new2.jpg'),
    require('../assets/new3.jpg'),
    require('../assets/new4.jpg'),
    require('../assets/new5.png'),
    require('../assets/new6.jpg'),
  ];

  const artistsData = [
    {
      image: require('../assets/Artist1_avatar.png'),
      title: 'Artist 1',
    },
    {
      image: require('../assets/Artist2_avatar.png'),
      title: 'Artist 2',
    },
    {
      image: require('../assets/Artist3_avatar.png'),
      title: 'Artist 3',
    },
    {
      image: require('../assets/Artist4_avatar.png'),
      title: 'Artist 4',
    },
    {
      image: require('../assets/Artist5_avatar.png'),
      title: 'Artist 5',
    },
    {
      image: require('../assets/Artist6_avatar.png'),
      title: 'Artist 6',
    },
  ];

  return (
    <div className="home-container">
      <Slider slides={slides} mainBanners={mainBanners}/>
      <CardSlider cardSlides={cardSlides}/>
      <ArtistsBlock artistsData={artistsData} />
    </div>
  );
}
