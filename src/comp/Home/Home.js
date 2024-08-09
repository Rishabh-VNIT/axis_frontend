// Home.js
import React from "react";
import "./h.css";

import HeroSection from "../HeroSection/HeroSection";

import FAQs from "../FAQs/FAQs";

import Respo from "../Respo/Respo";
import Responsibilites from "../Responsibilities/res";
import Count from "../Count/Count";
// import Abaim from '../Ab-aim/Ab-aim';
import Con from "../Contact/Contact";
import VideoBackground from "../VideoBackground/Video";

import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className="home-container">
      <VideoBackground />
      {/* <div id="main2" className="full-screen-vanta"></div> */}
      <div className="content-container">
        <HeroSection />
        {/* <Abaim/> */}
        {/* <Sponsers/> */}
        <Count />
        <Respo />
        <Responsibilites />
        {/* <Timeline /> */}
        <Carousel/>
        <FAQs />
        <Con />
      </div>
    </div>
  );
};

export default Home;
