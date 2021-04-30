import React, {useRef, useEffect, useState} from 'react';
import Hover from "./Hover";
import useViewport from './hooks/useViewport';
import useElementOnScreen from './hooks/useElementOnScreen';
import useMousePosition from './hooks/useMousePosition';
import {Spring} from 'react-spring/renderprops';

const Project = ({project, portfolioItems, vieportSizeRef, projectHover, setProjectHover, index, setResultsIdx}) => {
  const {x: cursorHorizontalPosition, y: cursorVerticalPosition} = useMousePosition();
  const {viewportWidth, viewportHeight} = useViewport();
  const [cursorInsideDiv, setCursorInsideDiv] = useState(true);
  const [bottom, setBottom] = useState(0);
  const [right, setRight] = useState(0);
  const parentRef = useRef();


  const horizontalMidPointOfDiv = viewportWidth / 2;
  const verticalMidPointOfDiv = viewportHeight / 2;
  const translateXPosition = (cursorHorizontalPosition - horizontalMidPointOfDiv) / 4.5;
  const translateYPosition = (cursorVerticalPosition - verticalMidPointOfDiv) / 4.5;

  //OPENS PROJECT SITE IN A NEW TAB
  const openInNewTab = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  const projectRef = useRef(null);


  // const fullyInViewEntry = useElementOnScreen(projectRef, {
  //   threshold: 0.9
  // });
  // const fullyInView = !!fullyInViewEntry?.isIntersecting;

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

    // useEffect(() => {
      
    //   if (fullyInView) {
    //     setResultsIdx(index);
    //     // setProjectHover(true);
    //     console.log(`full index to ${index}`);
    //   }
    // }, [fullyInView])

  function handleProjectHover() {
    setProjectHover(true);
    setResultsIdx(index);
  }

  function handleMouseEnterParent() {
    // setCursorInsideDiv(true);
    // const {bottom, right} = vieportSizeRef.current.getBoundingClientRect();
    // console.log("bottom", bottom);
    // console.log("right", right);
    // setBottom(bottom);
    // setRight(right);
    
  }

  // function handleMouseLeaveParent() {
  //   setCursorInsideDiv(false);
  //   setProjectHover(false)
  // }

  const boxStyles = {
    transform: `translate(${translateXPosition}px, ${translateYPosition}px)`,
  }


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
    <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
      config={{delay: 100, duration: 100}}
    >
      {props => (
        <div style={props} ref={projectRef}>


          {/* <Hover scale={1.05} > */}

              {
                projectHover &&
                <div className='card'>
                  <div className="Work-Summary-Container" style={cursorInsideDiv ? boxStyles : {}} onClick={openInNewTab}  onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)} >
                    <div className="Work-Summary-Box">
                      <div className={`Work-Summary-Background`}></div>
                      <p className="Work-Summary-Text">{project.summary}</p>
                    </div>
                  </div>
                  {/* <video style={{position: "absolute", width: gifWidth, height: gifHeight, zIndex: -20, left: '0', display: 'flex', justifyContent: 'center', alignSelf: 'center'}} loop={true} autoPlay="autoplay" muted>
                    <source src={project.gif} type="video/mp4" />
                  </video> */}
                </div>
              }
              
              {
                !projectHover &&
                <div className='card' >
                  <div onClick={openInNewTab} className="Work-Title-Box" style={cursorInsideDiv ? boxStyles : {}} onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)}>
                    <p className="Work-Title">{project.title}</p>
                  </div>
                  {/* <video style={{position: "absolute", width: gifWidth, height: gifHeight, zIndex: -20, left: '0', display: 'flex', justifyContent: 'center', alignSelf: 'center'}} loop={true} autoPlay="autoplay" muted>
                    <source src={project.gif} type="video/mp4" />
                  </video> */}
                </div>
              }

          {/* </Hover> */}


        </div>
      )}
    </Spring>
    </>
  );
};

export default Project;