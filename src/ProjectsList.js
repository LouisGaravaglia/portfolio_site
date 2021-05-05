import React from 'react';
import Hover from "./Hover";
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import MdLaptop from 'react-ionicons/lib/MdLaptop';
import CarouselContainer from './CarouselContainer';

const ProjectList = ({portfolioItems, projectHover, setProjectHover, resultsIdx, setResultsIdx}) => {
  const projectInView = portfolioItems[resultsIdx];

  const openSite = () => {
    const newWindow = window.open(projectInView.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  const openGitHub = () => {
    const newWindow = window.open(projectInView.githubLink, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
      <div className="Project-Container" >
        <div className="scrolling-wrapper">
          {portfolioItems.map((project, index) => <CarouselContainer key={project.id} index={index} project={project} projectHover={projectHover} setProjectHover={setProjectHover} setResultsIdx={setResultsIdx}/>)}
        </div>
      </div>
      <div className='Project-Info-Footer-Container'>
        <div className='Project-Info-Footer'>
          <div className='GitHub-Project-Box'>
            <Hover scale={1.05}>
              <LogoGithub className="GitHub-Project" onClick={openGitHub} fontSize='2rem' color="#fff" />
            </Hover>
          </div>
          <div className='Page-Number-Box'>
            <p className="Project-Page-Number">0{resultsIdx + 1} / 0{portfolioItems.length}</p>
          </div>
          <div className='Website-Project-Box'>
            <Hover scale={1.05}>
              <MdLaptop className="Website-Project" onClick={openSite} fontSize='2rem' color="#fff" />
            </Hover>
          </div>
        </div>
      </div> 
    </>
  );
};

export default ProjectList;