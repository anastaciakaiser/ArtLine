import React from 'react';
import './styles.css';
import Slider from '../components/Slider';

export default function Home() {
  const slides = [
    require('../assets/blur_background1.jpg'),
    require('../assets/blur_background1.jpg'),
    require('../assets/blur_background1.jpg'),
  ];

  return <Slider slides={slides} />;
}