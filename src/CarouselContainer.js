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

  // useEffect(() => {
  //   if 
  //   // setProjectDisplayedInCenter(false)
  // }, [cursorHorizontalPosition, cursorVerticalPosition])

  const boxStyles = {
    transform: `translate(${translateXPosition}px, ${translateYPosition}px)`,
  }


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <div ref={projectRef}>
      {/* <Hover scale={1.05} > */}
          <div className='card' onMouseMove={() => setProjectDisplayedInCenter(false)}>
            <div className="Work-Summary-Box" style={projectDisplayedInCenter ? {} : boxStyles} onClick={openInNewTab}  onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)} >
              {projectHover ? <p className="Work-Summary-Text">{project.summary}</p> : <p className="Work-Title">{project.title}</p>}
            </div>
          </div>
      {/* </Hover> */}
    </div>
  );
};

export default CarouselContainer;