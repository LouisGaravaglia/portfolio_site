import React, {useState, useCallback} from 'react';
import {Spring} from 'react-spring/renderprops';
import './App.css';
import ProjectsList from "./ProjectsList";
import useViewport from "./hooks/useViewport"
import NextArrow from './NextArrow';
import ACOUSTIC_GIF from "./images/ACOUSTIC.mp4";
import LYRCS_GIF from "./images/LYRCS.mp4";
import WINENOT_GIF from "./images/WINENOT.mp4";
import SMARTREACH_GIF from "./images/SMARTREACH.mp4";
import PORTFOLIOSITE_GIF from "./images/PORTFOLIOSITE.mp4";

function Portfolio() {
  const [projectHover, setProjectHover] = useState(false);
  const [resultsIdx, setResultsIdx] = useState(0);
  const {viewportWidth, viewportHeight} = useViewport();
  const aspectRatio = viewportWidth / viewportHeight;
  let gifWidth;
  let gifHeight;
  const memoizedSetProjectHover = useCallback(bool => setProjectHover(bool), []);
  const memoizedSetResultsIdx = useCallback(num => setResultsIdx(num), []);

  //KEEPING THE BACKGROUND GIF COVERING THE BACKGROUND AT ALL TIMES
  if (aspectRatio <= 2.358916) {
    gifHeight = '100vh';
    gifWidth = 'auto'
  } else {
    gifHeight = 'auto';
    gifWidth = '100vw';
  }

  const portfolioItems = [
    {
      id: 1,
      title: "Acoustigram.io",
      gif: ACOUSTIC_GIF,
      link: "http://www.acoustigram.io/",
      githubLink: "https://github.com/LouisGaravaglia/test-acoustic-frontend",
      summary: "***CURRENTLY IN DEVELOPMENT*** Acoustigram.io is a web app that will use AI to create playlists of new music releases it thinks you may like. Tech Stack: Typescript | React | Python | Django | TensorFlow | PostgreSQL",
      classname: "LYRCS-Opacity"
    },
    {
      id: 3,
      title: "LYRCS",
      gif: LYRCS_GIF,
      link: "http://findlyrcs.herokuapp.com/",
      githubLink: "https://github.com/LouisGaravaglia/iTranslate",
      summary: "LYRCS is a web app that displays lyrics for a song in its original language as well as a translated language of the user's choice. Tech Stack: Javascript | React | Redux | Node | Express | PostgreSQL",
      classname: "LYRCS-Opacity"
    },
    {
      id: 4,
      title: "The Smart Reach",
      gif: SMARTREACH_GIF,
      link: "https://www.thesmartreach.org/",
      githubLink: "https://github.com/jamiesonreinhard/bridger-front-end",
      summary: "The Smart Reach is a website for a non-profit that matches at-risk youth with volunteer tutors. Founding engineering team member. Tech Stack: React | SASS | Ruby on Rails",
      classname: "LYRCS-Opacity"
    },
    {
      id: 5,
      title: "Wine-not!",
      gif: WINENOT_GIF,
      link: "https://findwinenot.herokuapp.com/",
      githubLink: "https://github.com/LouisGaravaglia/Wine-not",
      summary: "Would you like something new to drink? Wine-Not! A web app that allows users to find new Wines to enjoy. Tech Stack: Javascript | Python | Flask | PostgreSQL | Bulma",
      classname: "Wine-Not-Opacity"
    },
    {
      id: 6,
      title: "Portfolio site",
      gif: PORTFOLIOSITE_GIF,
      link: "https://louis-garavaglia.netlify.app/",
      githubLink: "https://github.com/LouisGaravaglia/portfolio_site",
      summary: "A clean and interactive site that puts the focus on the individual projects. Designed with a mobile-first approach. Tech Stack: HTML5 | CSS3 | React",
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
    <video style={{position: "absolute", width: gifWidth, height: gifHeight, zIndex: -12}} loop={true} autoPlay="autoplay" muted>
      <source src={portfolioItems[resultsIdx].gif} type="video/mp4" />
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
            <NextArrow />
            <ProjectsList portfolioItems={portfolioItems} projectHover={projectHover} setProjectHover={memoizedSetProjectHover} resultsIdx={resultsIdx} setResultsIdx={memoizedSetResultsIdx}/>
            {gifBackground}
          </div>
 

        </div>
      )}
    </Spring>
  );
};

export default Portfolio;