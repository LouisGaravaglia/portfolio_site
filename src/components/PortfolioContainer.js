import React, {useState, useCallback, useEffect, useRef} from 'react';
import PortfolioItem from "./PortfolioItem";
import useViewport from "../hooks/useViewport"
import NextArrow from './NextArrow';
import portfolio from '../portfolio';

function PortfolioContainer() {
  const [projectHover, setProjectHover] = useState(false);
  const [indexOfProjectInView, setIndexOfProjectInView] = useState(0);
  const {viewportWidth, viewportHeight} = useViewport();
  const aspectRatio = viewportWidth / viewportHeight;
  const memoizedSetProjectHover = useCallback(bool => setProjectHover(bool), []);
  const memoizedSetIndexOfProjectInView = useCallback(num => setIndexOfProjectInView(num), []);
  const [mobileMode, setMobileMode] = useState(false);
  const videoRef = useRef();
  let gifWidth;
  let gifHeight;

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
  }, [viewportWidth, viewportHeight])

  const previousUrl = useRef(portfolio[indexOfProjectInView].gif);

  //FORCE THE VIDEO ELEMENT TO LOAD THE NEW MP4 FILE FOR THE CURRENT PORTFOLIO ITEM
  useEffect(() => {
    if (previousUrl.current === portfolio[indexOfProjectInView].gif) return;
    if (videoRef.current) videoRef.current.load();
    previousUrl.current = portfolio[indexOfProjectInView].gif;
  }, [portfolio, indexOfProjectInView])

  let mainBackground;

  if (projectHover || mobileMode) {
    mainBackground = "none"
  } else {
    mainBackground = "linear-gradient(to right, #63a198 0%, #8874c2 100%)";
  }

  let gifBackground;

  if (projectHover || mobileMode) gifBackground = (
    <>
      <div className="Work-Gif-Box"></div>
      <video style={{position: "absolute", width: gifWidth, height: gifHeight, zIndex: -12}} loop={true} autoPlay="autoplay" muted ref={videoRef} playsinline>
        <source src={portfolio[indexOfProjectInView].gif} type="video/mp4" />
      </video>
    </>
  )

  return (
    <div className="Main-Container" style={{background: mainBackground}}>
      <NextArrow />
      <div className="Project-Container" >
        <div className="scrolling-wrapper">
          {portfolio.map((project, index) => <PortfolioItem key={project.id} index={index} project={project} projectHover={projectHover} setProjectHover={memoizedSetProjectHover} setIndexOfProjectInView={memoizedSetIndexOfProjectInView} mobileMode={mobileMode} portfolio={portfolio} indexOfProjectInView={indexOfProjectInView}/>)}
        </div>
      </div>
      {gifBackground}
    </div>
  );
};

export default PortfolioContainer;