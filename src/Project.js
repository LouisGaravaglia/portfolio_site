import React, {useRef, useEffect} from 'react';
import Hover from "./Hover";
import useViewport from './hooks/useViewport';
import useElementOnScreen from './hooks/useElementOnScreen';
import {Spring} from 'react-spring/renderprops';

const Project = ({project, portfolioItems, projectHover, setProjectHover, index, setResultsIdx}) => {


  //OPENS PROJECT SITE IN A NEW TAB
  const openInNewTab = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  const projectRef = useRef(null);


  const entry = useElementOnScreen(projectRef, {
    threshold: 0.2
  });
  const isVisible = !!entry?.isIntersecting;


    useEffect(() => {
      console.log(`useEffect ${index}`, isVisible);
      if (isVisible) setResultsIdx(index);
    }, [isVisible])

  function handleProjectHover() {
    setProjectHover(true);
    setResultsIdx(index);
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
                <div className='card' >
                  <div className="Work-Summary-Container" onClick={openInNewTab}  onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)} >
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
                <div className='card'>
                  <div onClick={openInNewTab} className="Work-Title-Box" onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)}>
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