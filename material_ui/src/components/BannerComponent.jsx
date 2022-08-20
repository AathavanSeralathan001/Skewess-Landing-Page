import React from 'react';
import Banner from '../assets/Desktop - 1.jpg';
import '../styles/banner.css';
import '../App.css';
export default function BannerComponent() {


  return (
 
    <div id='banner'>
        <div className="banner-wrapper">
            <img src={Banner} alt="banner" srcset="" />
        </div>
       
        <marquee behavior="slide" className="time" direction="">Time to go beyond the infinity....</marquee>
    </div>
  )
}
