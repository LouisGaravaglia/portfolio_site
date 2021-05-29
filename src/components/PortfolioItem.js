import React, {useRef, useEffect, memo} from 'react';
// import useViewport from './hooks/useViewport';
import useElementOnScreen from '../hooks/useElementOnScreen';
// import useMousePosition from './hooks/useMousePosition';
import PortfolioItemDetails from './PortfolioItemDetails';

const PortfolioItem = ({project, projectHover, setProjectHover, index, setIndexOfProjectInView, mobileMode, portfolio, indexOfProjectInView}) => {
  // const {x: cursorHorizontalPosition, y: cursorVerticalPosition} = useMousePosition();
  // const {viewportWidth, viewportHeight} = useViewport();
  const projectRef = useRef(null);
  // const horizontalMidPointOfDiv = viewportWidth / 2;
  // const verticalMidPointOfDiv = viewportHeight / 2;
  // const translateXPosition = (cursorHorizontalPosition - horizontalMidPointOfDiv) / 4.5;
  // const translateYPosition = (cursorVerticalPosition - verticalMidPointOfDiv) / 4.5;
  // const [projectDisplayedInCenter, setProjectDisplayedInCenter] = useState(true);

  const openProjectSite = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
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
      {indexOfProjectInView === index && <PortfolioItemDetails project={project} index={index} portfolio={portfolio} />}
    </>
  );
};

export default memo(PortfolioItem);