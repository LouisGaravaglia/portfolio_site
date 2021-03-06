import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './App.css';
import ProjectsList from "./ProjectsList";
import LYRCS_GIF from "./images/lyrcs_gif.mp4";
import WINE_GIF from "./images/wine_gif.mp4";

function Portfolio() {

  const portfolioItems = [
    {
      id: 1,
      title: "LYRCS",
      gif: LYRCS_GIF,
      link: "http://lyrcs.herokuapp.com/",
      githubLink: "https://github.com/LouisGaravaglia/iTranslate",
      summary: "LYRCS is a web app that displays lyrics for a song in its original language as well as a translated language of the user's choice. Tech Stack: Javascript | React | Redux | Node | Express | PostgreSQL",
      classname: "LYRCS-Opacity "
    },
    {
      id: 2,
      title: "Wine-not!",
      gif: WINE_GIF,
      link: "https://wine-not-app.herokuapp.com/",
      githubLink: "https://github.com/LouisGaravaglia/Wine-not",
      summary: "Would you like something new to drink? Wine-Not! A web app that allows users to find new Wines to enjoy. Tech Stack: Javascript | Python | Flask | PostgreSQL | Bulma",
      classname: "Wine-Not-Opacity"
    }
  ];

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
      config={{delay: 300, duration: 300}}
    >
      {props => (
        <div style={props}>

          <div className="Main-Container">
            <ProjectsList key={portfolioItems[0].id} portfolioItems={portfolioItems}/>
          </div>

        </div>
      )}
    </Spring>
  );
};

export default Portfolio;