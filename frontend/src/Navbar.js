import React, {useEffect, useState} from "react";
import Hover from "./Hover";
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'

const NavBar = () => {

////////////////////////////////////////////////////  HANDLE CLICK FUNCTIONS  ////////////////////////////////////////////////////

  const openLinkedIn = () => {
    const newWindow = window.open("https://www.linkedin.com/in/louisgaravaglia/", '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  const openGitHub = () => {
    const newWindow = window.open("https://github.com/LouisGaravaglia", '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
      <div className="Navbar-Container-Left">
        <div className="Navbar-Name-Box">
            <p  className="Navbar-Name">Louis Garavaglia</p>
        </div>
      </div>
      <div className="Navbar-Container-Right">
        <div className="Navbar-Logo-Box">
          <Hover scale={1.20}>
            <LogoLinkedin className="LinkedIn-Logo" onClick={openLinkedIn} fontSize="25px" color="#fff" />
          </Hover>
          <Hover scale={1.20}>
            <LogoGithub className="GitHub-Logo" onClick={openGitHub} fontSize="25px" color="#fff" />
          </Hover>
        </div>
      </div>
    </>
  );
};

export default NavBar;