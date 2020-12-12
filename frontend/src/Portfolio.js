import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './App.css';
import Projects from "./ProjectsList";
import LYRCS_GIF from "./images/lyrcs_gif.mp4";
import WINE_GIF from "./images/wine_gif.mp4";

function Portfolio() {

  const portfolioItems = [
    {
      id: 1,
      title: "LYRCS",
      gif: LYRCS_GIF,
      link: "http://lyrcs.herokuapp.com/",
      summary: "LYRCS is a web app that displays lyrics for a song in its original language as well as a translated language of the user's choice. Tech Stack: Javascript | React | Redux | Node | Express | PostgreSQL"
    },
    {
      id: 2,
      title: "Wine-not!",
      gif: WINE_GIF,
      link: "https://wine-not-app.herokuapp.com/",
      summary: "Would you like something new to drink? Wine-Not! A web app that allows users to find new Wines to enjoy. Tech Stack: Javascript | Python | Flask | PostgreSQL | Bulma"
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
            <Projects key={portfolioItems[0].id} portfolioItems={portfolioItems}/>
          </div>

        </div>
      )}
    </Spring>
  );
};

export default Portfolio;