import React from 'react';

// import video from "../img/1.mp4"
// import video from "../img/2.mp4"
// import video from "../img/3.mp4"
import video from "../img/4.mp4"
// import video from "../img/5.mp4"
// import {Display} from "./Detail"


const HomePageBackground = () => (
  <div className="mainPage__background">

    <div className="mainPage__background-image" />

    <div className="mainPage__player-wrapper">
      <video autoPlay muted loop id="mainPage__myVideo">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>

  </div>
)

export default HomePageBackground