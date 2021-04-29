import React, {useRef, useEffect} from 'react';
import Hover from "./Hover";
import useViewport from './hooks/useViewport';
import useElementOnScreen from './hooks/useElementOnScreen';
import {Spring} from 'react-spring/renderprops';

const Project = ({project, projectHover, setProjectHover, index}) => {

  //OPENS PROJECT SITE IN A NEW TAB
  const openInNewTab = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  const projectRef = useRef(null);
  let leftSideOfProjectDiv = 0;
  let rightSideOfProjectDiv = 0;
  if (projectRef.current !== null) {
    const {left, right} = projectRef.current.getBoundingClientRect();
    leftSideOfProjectDiv = left;
    rightSideOfProjectDiv = right;
  }
  const {viewportWidth}  = useViewport();
  const viewportMidPoint = viewportWidth / 2;

  const entry = useElementOnScreen(projectRef, {
    // root: document.querySelector('.scrolling-wrapper'),
    rootMargin: "0px -300px",
    threshold: 0.9
  });
  const isVisible = !!entry?.isIntersecting;

    // useEffect(() => {
    //   const leftVal = projectRef.current.getBoundingClientRect().left;

    //   if(selectedPlaylistIndex === index) handleScrollToSelectedProject(projectRef);
    // }, [projectRef, selectedPlaylistIndex])


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
    <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
      config={{delay: 100, duration: 100}}
    >
      {props => (
        <div style={props}>


          <Hover scale={1.05}>
          <div className='card' onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)}>
              {
                projectHover &&
                <>
   
                  <div className="Work-Summary-Container" onClick={openInNewTab} ref={projectRef}>
             
                    <div className="Work-Summary-Box">
                    <div className={`Work-Summary-Background`}></div>
                        <p className="Work-Summary-Text">{project.summary}</p>
                      </div>
                  </div>
                  </>
              }
              
              {
                !projectHover &&
                <div onClick={openInNewTab} className="Work-Title-Box">
                  <p className="Work-Title">{project.title}</p>
                </div>
              }

            </div>
          </Hover>


        </div>
      )}
    </Spring>
    </>
  );
};

export default Project;