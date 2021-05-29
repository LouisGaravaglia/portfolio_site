import React, {useRef, useEffect, memo} from 'react';
// import useViewport from './hooks/useViewport';
import useElementOnScreen from '../hooks/useElementOnScreen';
// import useMousePosition from './hooks/useMousePosition';
import Hover from "./Hover";
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import MdLaptop from 'react-ionicons/lib/MdLaptop';

const CarouselContainer = ({project, projectHover, setProjectHover, index, setIndexOfProjectInView, mobileMode, portfolioItems, indexOfProjectInView}) => {
  // const {x: cursorHorizontalPosition, y: cursorVerticalPosition} = useMousePosition();
  // const {viewportWidth, viewportHeight} = useViewport();
  const projectRef = useRef(null);
  // const horizontalMidPointOfDiv = viewportWidth / 2;
  // const verticalMidPointOfDiv = viewportHeight / 2;
  // const translateXPosition = (cursorHorizontalPosition - horizontalMidPointOfDiv) / 4.5;
  // const translateYPosition = (cursorVerticalPosition - verticalMidPointOfDiv) / 4.5;
  // const [projectDisplayedInCenter, setProjectDisplayedInCenter] = useState(true);
  const projectInView = project;

  const openProjectSite = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  }
 
  const openProjectGitHub = () => {
    const newWindow = window.open(projectInView.githubLink, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  }

  const partiallyInViewEntry = useElementOnScreen(projectRef, {
    threshold: 0.4
  })

  const partiallyInView = !!partiallyInViewEntry?.isIntersecting;

  useEffect(() => {
    if (partiallyInView) {
      setIndexOfProjectInView(index);
      setProjectHover(false);
    }
  }, [partiallyInView, index, setIndexOfProjectInView, setProjectHover])

  // const boxStyles = {
  //   transform: `translate(${translateXPosition}px, ${translateYPosition}px)`,
  // };

  // const desktopJSX = (
  //   <div className='card' onMouseMove={() => setProjectDisplayedInCenter(false)}>
  //     <div className="Work-Summary-Box" style={projectDisplayedInCenter ? {} : boxStyles} onClick={openInNewTab}  onMouseEnter={handleProjectHover} onMouseLeave={() => setProjectHover(false)} >
  //       {projectHover ? <p className="Work-Summary-Text">{project.summary}</p> : <p className="Work-Title">{project.title}</p>}
  //     </div>
  //   </div>
  // );

  // const mobileJSX = (
  //   <div className='card'>
  //     <div className="Work-Mobile-Container">
  //       <p className="Work-Title-Mobile">{project.title}</p>
  //         <div className="Work-Summary-Box-Mobile" onClick={openInNewTab}>
  //           <p className="Work-Summary-Text-Mobile">{project.summary}</p>
  //         </div>
  //     </div>
  //   </div>
  // );

  const projectInfoFooter = (
    <div className='Project-Info-Footer-Container'>
      <div className='Project-Info-Footer'>
        <div className='GitHub-Project-Box'>
          <Hover scale={1.05}>
            <LogoGithub className="GitHub-Project" onClick={openProjectGitHub} fontSize='2rem' color="#fff" />
          </Hover>
        </div>
        <div className='Page-Number-Box'>
          <p className="Project-Page-Number">0{index + 1} / 0{portfolioItems.length}</p>
        </div>
        <div className='Website-Project-Box'>
          <Hover scale={1.05}>
            <MdLaptop className="Website-Project" onClick={openProjectSite} fontSize='2rem' color="#fff" />
          </Hover>
        </div>
      </div>
    </div>
  );

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
      <div ref={projectRef}>
        {/* {mobileMode ? mobileJSX : desktopJSX} */}
        <div className='card'>
          <div className="Work-Summary-Box" onClick={openProjectSite}  onMouseEnter={() => setProjectHover(true)} onMouseLeave={() => setProjectHover(false)} >
            {projectHover || mobileMode ? <p className="Work-Summary-Text">{mobileMode ? project.mobileSummary : project.summary}</p> : <p className="Work-Title">{project.title}</p>}
          </div>
        </div>
      </div>
      {indexOfProjectInView === index ? projectInfoFooter : <></>}
    </>
  );
};

export default memo(CarouselContainer);