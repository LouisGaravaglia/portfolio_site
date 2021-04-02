import React from 'react';
import './App.css';
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
// import ACOUSTIC from "./images/Acoustic_1.m4v";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Portfolio />
      <div className="video-background-box">
      {/* <video className="video-background" loop="true" autoplay="autoplay" muted>
        <source src={ACOUSTIC} type="video/mp4" />
      </video> */}
      </div>
    </div>
  );
};

export default App;