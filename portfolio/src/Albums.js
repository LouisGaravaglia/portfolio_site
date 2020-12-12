import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './App.css';
import SearchResultList from "./SearchResultList";
import useViewport from "./hooks/useViewport";
import LYRCS_GIF from "./images/lyrcs_gif.mp4";
import WINE_GIF from "./images/wine_gif.mp4";

function Albums({typeOfAlbums}) {
  const {viewportWidth} = useViewport();
  let itemsPerPage;
  let albumKey;

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
      summary: "Would you like something new to drink? Wine-Not! A web app that allows users to find new Wines to enjoy. Tech Stack: Javascript | Python | Flask | PostgreSQL | WTForms | API"
    }
  ];

  //VIEWPORT BREAKPOINTS TO DETERMINT HOW MANY ALBUM COVERS TO DISPLAY AT ONCE
  // if (viewportWidth < 1180 && viewportWidth > 780) {
  //   itemsPerPage = 2;
  // } else if (viewportWidth < 780) {
  //   itemsPerPage = 1;
  // } else {
  //   itemsPerPage = 3;
  // };

  //ALBUM KEY WHICH WOULD CHANGE IF ITEMS PER PAGE CHANGED TO RERENDER COMPONENT IF NUMBER OF ALUMBS DISPLAYING IS CHANGING
  // if (itemsPerPage < albums.length) {
  //   albumKey = itemsPerPage;
  // } else {
  //   albumKey = 0;
  // };

////////////////////////////////////////////////////  HANDLE CLICK FUNCTIONS  ////////////////////////////////////////////////////

  const handleAlbumClick = async () => {

  };

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
            <SearchResultList key={portfolioItems[0].id} resultsArray={portfolioItems} handleSearch={handleAlbumClick} />
          </div>

        </div>
      )}
    </Spring>
  );
};

export default Albums;