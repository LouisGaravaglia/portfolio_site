import React from 'react';
import Hover from "./Hover";
import {Spring} from 'react-spring/renderprops';

const Project = ({project, projectHover, setProjectHover}) => {

  //OPENS PROJECT SITE IN A NEW TAB
  const openInNewTab = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

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
          <div onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)}>
              {
                projectHover &&
                <>
   
                  <div className="Work-Summary-Container" onClick={openInNewTab}>
             
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