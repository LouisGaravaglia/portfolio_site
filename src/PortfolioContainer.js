import React, {useState, useCallback, useEffect, useRef} from 'react';
import {Spring} from 'react-spring/renderprops';
import './App.css';
import PortfolioItem from "./PortfolioItem";
import useViewport from "./hooks/useViewport"
import NextArrow from './NextArrow';
import portfolioItems from './portfolioItems';

function Portfolio() {
  const [projectHover, setProjectHover] = useState(false);
  const [resultsIdx, setResultsIdx] = useState(0);
  const {viewportWidth, viewportHeight} = useViewport();
  const aspectRatio = viewportWidth / viewportHeight;
  let gifWidth;
  let gifHeight;
  const memoizedSetProjectHover = useCallback(bool => setProjectHover(bool), []);
  const memoizedSetResultsIdx = useCallback(num => setResultsIdx(num), []);
  const [mobileMode, setMobileMode] = useState(false);
  const videoRef = useRef();

  //KEEPING THE BACKGROUND GIF COVERING THE BACKGROUND AT ALL TIMES
  if (aspectRatio <= 2.358916) {
    gifHeight = '100vh';
    gifWidth = 'auto'
  } else {
    gifHeight = 'auto';
    gifWidth = '100vw';
  }

  useEffect(() => {
    if (viewportWidth <= 700 && viewportHeight <= 650) setMobileMode(true);
    if (viewportWidth > 700 || viewportHeight > 650) setMobileMode(false);
  }, [viewportWidth, viewportHeight]);

  const previousUrl = useRef(portfolioItems[resultsIdx].gif);

  //FORCE THE VIDEO ELEMENT TO LOAD THE NEW MP4 FILE FOR THE CURRENT PORTFOLIO ITEM
  useEffect(() => {
    if (previousUrl.current === portfolioItems[resultsIdx].gif) return;
    if (videoRef.current) videoRef.current.load();
    previousUrl.current = portfolioItems[resultsIdx].gif;
  }, [portfolioItems, resultsIdx])

  let mainBackground;

  if (projectHover || mobileMode) {
    mainBackground = "none"
  } else {
    mainBackground = "linear-gradient(to right, #63a198 0%, #8874c2 100%)";
  };

  let gifBackground;

  if (projectHover || mobileMode) gifBackground = (
    <>
      <div className="Work-Gif-Box"></div>
      <video style={{position: "absolute", width: gifWidth, height: gifHeight, zIndex: -12}} loop={true} autoPlay="autoplay" muted ref={videoRef}>
        <source src={portfolioItems[resultsIdx].gif} type="video/mp4" />
      </video>
    </>
  );

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
            <div className="Project-Container" >
              <div className="scrolling-wrapper">
                {portfolioItems.map((project, index) => <PortfolioItem key={project.id} index={index} project={project} projectHover={projectHover} setProjectHover={memoizedSetProjectHover} setResultsIdx={memoizedSetResultsIdx} mobileMode={mobileMode} portfolioItems={portfolioItems} resultsIdx={resultsIdx}/>)}
              </div>
            </div>
            {gifBackground}
          </div>
 

        </div>
      )}
    </Spring>
  );
};

export default Portfolio;