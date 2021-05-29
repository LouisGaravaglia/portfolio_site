import React, {memo} from 'react';
import Hover from "./Hover";
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import MdLaptop from 'react-ionicons/lib/MdLaptop';

const PortfolioItemDetails = ({project, index, portfolio}) => {

  const openProjectSite = () => {
    const newWindow = window.open(project.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  }
 
  const openProjectGitHub = () => {
    const newWindow = window.open(project.githubLink, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  }

  return (
    <div className='Project-Info-Footer-Container'>
      <div className='Project-Info-Footer'>
        <div className='GitHub-Project-Box'>
          <Hover scale={1.05}>
            <LogoGithub className="GitHub-Project" onClick={openProjectGitHub} fontSize='2rem' color="#fff" />
          </Hover>
        </div>
        <div className='Page-Number-Box'>
          <p className="Project-Page-Number">0{index + 1} / 0{portfolio.length}</p>
        </div>
        <div className='Website-Project-Box'>
          <Hover scale={1.05}>
            <MdLaptop className="Website-Project" onClick={openProjectSite} fontSize='2rem' color="#fff" />
          </Hover>
        </div>
      </div>
    </div>
  );
};

export default memo(PortfolioItemDetails);