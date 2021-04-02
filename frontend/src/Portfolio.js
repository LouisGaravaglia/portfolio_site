import React, {useState} from 'react';
import {Spring} from 'react-spring/renderprops';
import './App.css';
import ProjectsList from "./ProjectsList";
import LYRCS_GIF from "./images/lyrcs_gif.mp4";
import WINE_GIF from "./images/wine_gif.mp4";
import ACOUSTIC_GIF from "./images/acoustic_io.mp4";
import useViewport from "./hooks/useViewport"
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import MdLaptop from 'react-ionicons/lib/MdLaptop';
import ACOUSTIC_LG from "./images/Acoustic_LG.m4v";

function Portfolio() {
  const [projectHover, setProjectHover] = useState(false);
  const {viewportWidth, viewportHeight} = useViewport();
  const aspectRatio = viewportWidth / viewportHeight;
  let gifWidth;
  let gifHeight;
    //KEEPING THE BACKGROUND GIF COVERING THE BACKGROUND AT ALL TIMES
    if (aspectRatio <= 2.11659) {
      gifHeight = '100vh';
      gifWidth = 'auto'
    } else {
      gifHeight = 'auto';
      gifWidth = '100vw';
    }
  

  const portfolioItems = [
    {
      id: 1,
      title: "Acoustic.io",
      gif: ACOUSTIC_GIF,
      link: "https://acoustic-io.herokuapp.com/",
      githubLink: "https://github.com/LouisGaravaglia/test-acoustic-frontend",
      summary: "***CURRENTLY IN DEVELOPMENT*** Acoustic.io is a web app that will use AI to create playlists for you of new music it thinks you may like. Tech Stack: Typescript | React | Python | Django | TensorFlow | PostgreSQL",
      classname: "LYRCS-Opacity"
    },
    {
      id: 2,
      title: "LYRCS",
      gif: LYRCS_GIF,
      link: "http://lyrcs.herokuapp.com/",
      githubLink: "https://github.com/LouisGaravaglia/iTranslate",
      summary: "LYRCS is a web app that displays lyrics for a song in its original language as well as a translated language of the user's choice. Tech Stack: Javascript | React | Redux | Node | Express | PostgreSQL",
      classname: "LYRCS-Opacity"
    },
    {
      id: 3,
      title: "Wine-not!",
      gif: WINE_GIF,
      link: "https://wine-not-app.herokuapp.com/",
      githubLink: "https://github.com/LouisGaravaglia/Wine-not",
      summary: "Would you like something new to drink? Wine-Not! A web app that allows users to find new Wines to enjoy. Tech Stack: Javascript | Python | Flask | PostgreSQL | Bulma",
      classname: "Wine-Not-Opacity"
    }
  ];

  let mainBackground;

  if (projectHover) {
    mainBackground = "none"
  } else {
    mainBackground = "linear-gradient(to right, #63a198 0%, #8874c2 100%)";
  }

  let gifBackground;

if (projectHover) gifBackground = (
  <>

  <div className="Work-Gif-Box"></div>
  <video style={{position: "absolute", width: gifWidth, height: gifHeight, zIndex: -12}} loop="true" autoplay="autoplay" muted>
    <source src={ACOUSTIC_LG} type="video/mp4" />
  </video>
 
  </>
)

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
      config={{delay: 300, duration: 300}}
    >
      {props => (
        <div style={props}>

          <div className="Main-Container" style={{background: mainBackground}}>
            <ProjectsList key={portfolioItems[0].id} portfolioItems={portfolioItems} projectHover={projectHover} setProjectHover={setProjectHover}/>
            {gifBackground}
          </div>
 

        </div>
      )}
    </Spring>
  );
};

export default Portfolio;