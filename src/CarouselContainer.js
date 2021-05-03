import React, {useRef, useEffect, useState} from 'react';
import Hover from "./Hover";
import useViewport from './hooks/useViewport';
import useElementOnScreen from './hooks/useElementOnScreen';
import useMousePosition from './hooks/useMousePosition';

const CarouselContainer = ({project, projectHover, setProjectHover, index, setResultsIdx}) => {
  const {x: cursorHorizontalPosition, y: cursorVerticalPosition} = useMousePosition();
  const {viewportWidth, viewportHeight} = useViewport();
  const projectRef = useRef(null);
  const horizontalMidPointOfDiv = viewportWidth / 2;
  const verticalMidPointOfDiv = viewportHeight / 2;
  const translateXPosition = (cursorHorizontalPosition - horizontalMidPointOfDiv) / 4.5;
  const translateYPosition = (cursorVerticalPosition - verticalMidPointOfDiv) / 4.5;
  const [projectDisplayedInCenter, setProjectDisplayedInCenter] = useState(true);
  const [mobileMode, setMobileMode] = useState(false);
  // console.log('viewportWidth');
  // console.log('viewportHeight', viewportHeight);

  //OPENS PROJECT SITE IN A NEW TAB
  const openInNewTab = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  const partiallyInViewEntry = useElementOnScreen(projectRef, {
    threshold: 0.4
  });
  const partiallyInView = !!partiallyInViewEntry?.isIntersecting;

  useEffect(() => {
    
    if (partiallyInView) {
      setResultsIdx(index);
      setProjectHover(false);
      console.log(`partial index to ${index}`);
    }
  }, [partiallyInView])

  function handleProjectHover() {
    setProjectHover(true);
    setResultsIdx(index);
  }

  useEffect(() => {
    console.log('viewportWidth', viewportWidth);
    console.log('viewportHeight', viewportHeight);
    if (viewportWidth < 580 || viewportHeight < 480) setMobileMode(true);
    if (viewportWidth > 580 && viewportHeight > 480) setMobileMode(false);
  }, [viewportWidth, viewportHeight])

  const boxStyles = {
    transform: `translate(${translateXPosition}px, ${translateYPosition}px)`,
  }

  const desktopJSX = (
    <div className='card' onMouseMove={() => setProjectDisplayedInCenter(false)}>
      <div className="Work-Summary-Box" style={projectDisplayedInCenter ? {} : boxStyles} onClick={openInNewTab}  onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)} >
        {projectHover ? <p className="Work-Summary-Text">{project.summary}</p> : <p className="Work-Title">{project.title}</p>}
      </div>
    </div>
  );

  const mobileJSX = (
    <div className='card'>
      <div className="Work-Summary-Box-Mobile" >
        <p className="Work-Summary-Text-Mobile">{project.summary}</p>
      </div>
    </div>
  )


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <div ref={projectRef}>

          {/* <div className='card' onMouseMove={() => setProjectDisplayedInCenter(false)}>
            <div className="Work-Summary-Box" style={projectDisplayedInCenter ? {} : boxStyles} onClick={openInNewTab}  onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)} >
              {projectHover ? <p className="Work-Summary-Text">{project.summary}</p> : <p className="Work-Title">{project.title}</p>}
            </div>
          </div> */}

          {mobileMode ? mobileJSX : desktopJSX}

    </div>
  );
};

export default CarouselContainer;