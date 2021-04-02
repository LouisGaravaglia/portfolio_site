import React, {useState} from 'react';
import Hover from "./Hover";
import {Spring} from 'react-spring/renderprops';
import useViewport from "./useViewport";
// import ACOUSTIC from "./images/Acoustic_1.m4v";

const Project = ({project, projectHover, setProjectHover}) => {
  const [albumHover, setAlbumHover] = useState(false);
  const {viewportWidth}  = useViewport();
  const ratio = viewportWidth/2560; //2560px is the width of the gif
  const viewportHeight = 1210 * ratio; //1210px is the height of the gif


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
            {/* <div onMouseEnter={() => setAlbumHover(true)} onMouseLeave={() => setAlbumHover(false)}> */}
              {
                projectHover &&
                <>
                {/* <div className="Work-Gif-Box"> */}
                  {/* <video className="video-background" style={{position: "absolute", width: viewportWidth, height: viewportHeight}} loop="true" autoplay="autoplay" muted>
                    <source src={ACOUSTIC} type="video/mp4" />
                  </video> */}
                {/* </div> */}
                  <div className="Work-Summary-Container" onClick={openInNewTab}>
                    {/* <video className="Work-Gif"  loop="true" autoplay="autoplay" muted>
                      <source src={project.gif} type="video/mp4" />
                    </video> */}
                    <div className="Work-Summary-Box">
                    <div className={`Work-Summary-Background`}></div>
                      {/* <div className={`Work-Summary-Background ${project.classname}`}></div> */}
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