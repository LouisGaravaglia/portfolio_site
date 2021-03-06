import React, {useState} from 'react';
import Hover from "./Hover";
import Project from  "./Project";
import useViewport from "./hooks/useViewport"
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import MdLaptop from 'react-ionicons/lib/MdLaptop';


const ProjectList = ({portfolioItems}) => {
  const [resultsIdx, setResultsIdx] = useState(0);
  const projectInView = portfolioItems[resultsIdx];
  const {viewportWidth, viewportHeight} = useViewport();
  let bottomVal = 0;
  let iconFontSize = '25px';

  const handleForwardClick = () => {
    if (resultsIdx === portfolioItems.length - 1) {
      return;
    } else {
      setResultsIdx(idx => idx + 1);
    };
  };

  const handleBackClick = () => {
    if (resultsIdx === 0) {
      return;
    } else {
      setResultsIdx(idx => idx - 1);
    };
  };

    const openSite = () => {
    const newWindow = window.open(projectInView.link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  const openGitHub = () => {
    const newWindow = window.open(projectInView.githubLink, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null;
  };

  //UPDATES PAGE NUMBERS AND LINKS ABSOLUTE HEIGHT TO BE ADJUSTED BASED OFF OF SCREEN SIZE
  //PAGE NUMBERS AND LINKS NEEDED TO BE ABSOLUTE POSITIONING SINCE THE HOVER ANIMATION WOULD EFFECT THEIR POSITION WHEN TRIGGERED

  //WHEN VIEWPORT WIDTH IS GREATER THAN 820PX
  if (viewportWidth > 820 && viewportHeight > 520) {
    bottomVal = (viewportHeight - 400) * 0.10;
  } else if (viewportWidth > 820 && (viewportHeight < 520 && viewportHeight > 450)) {
    bottomVal = (viewportHeight - 300) * 0.20;
  } else if (viewportWidth > 820 && (viewportHeight < 450 && viewportHeight > 325)) {
    bottomVal = (viewportHeight - 200) * 0.23;
  } else if (viewportWidth > 820 && viewportHeight < 325 ) {
    bottomVal = (viewportHeight - 150) * 0.18;
  //WHEN VIEWPORT WIDTH IS LESS THAN 820PX AND GREATER THAN 580PX
  } else if ((viewportWidth < 820 && viewportWidth > 580) && viewportHeight > 520) {
    bottomVal = (viewportHeight - 300) * 0.30;
  } else if ((viewportWidth < 820 && viewportWidth > 580) && (viewportHeight < 520 && viewportHeight > 450)) {
    bottomVal = (viewportHeight - 300) * 0.25;
  } else if ((viewportWidth < 820 && viewportWidth > 580) && (viewportHeight < 450 && viewportHeight > 325)) {
    bottomVal = (viewportHeight - 200) * 0.23;
  } else if ((viewportWidth < 820  && viewportWidth > 580) && viewportHeight < 325 ) {
    bottomVal = (viewportHeight - 150) * 0.18;
  //WHEN VIEWPORT WIDTH IS LESS THAN 580PX AND GREATER THAN 400PX
  } else if ((viewportWidth < 580 && viewportWidth > 400) && viewportHeight > 520) {
    bottomVal = (viewportHeight - 200) * 0.38;
    iconFontSize = "20px";
  } else if ((viewportWidth < 580 && viewportWidth > 400) && (viewportHeight < 520 && viewportHeight > 450)) {
    bottomVal = (viewportHeight - 200) * 0.35;
    iconFontSize = "20px";
  } else if ((viewportWidth < 580 && viewportWidth > 400) && (viewportHeight < 450 && viewportHeight > 325)) {
    bottomVal = (viewportHeight - 200) * 0.23;
    iconFontSize = "20px";
  } else if ((viewportWidth < 580 && viewportWidth > 400) && viewportHeight < 325 ) {
    bottomVal = (viewportHeight - 150) * 0.18;
    iconFontSize = "20px";
  //WHEN VIEWPORT WIDTH IS LESS THAN 400PX
  } else if (viewportWidth < 400 && viewportHeight > 520) {
    bottomVal = (viewportHeight - 150) * 0.38;
    iconFontSize = "15px";
  } else if (viewportWidth < 400 && (viewportHeight < 520 && viewportHeight > 450)) {
    bottomVal = (viewportHeight - 150) * 0.35;
    iconFontSize = "15px";
  } else if (viewportWidth < 400 && (viewportHeight < 450 && viewportHeight > 325)) {
    bottomVal = (viewportHeight - 150) * 0.23;
    iconFontSize = "15px";
  } else if (viewportWidth < 400 && viewportHeight < 325 ) {
    bottomVal = (viewportHeight - 150) * 0.18;
    iconFontSize = "15px";
  } else {
    bottomVal = (viewportHeight - 150) * 0.18;
    iconFontSize = "15px";
  }

const divStyle = {
  position: 'absolute',
  bottom: `${bottomVal}px`,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap'
};

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
      <div className="Project-Container" >

      <Hover scale={1.05}>
        <div onClick={handleBackClick} className="Back-Arrow">
          <span class="material-icons">
            navigate_before
          </span>
        </div>
      </Hover>

      {<Project key={projectInView.id} project={projectInView}/>}

      <Hover scale={1.05}>
        <div onClick={handleForwardClick} className="Forward-Arrow">
          <span class="material-icons">
            navigate_next
          </span>
        </div>
      </Hover>

      </div>

      <div style={divStyle}>
        <Hover scale={1.05}>
          <LogoGithub className="GitHub-Project" onClick={openGitHub} fontSize={iconFontSize} color="#fff" />
        </Hover>
        <p className="Project-Page-Number">0{resultsIdx + 1} / 02</p>
        <Hover scale={1.05}>
          <MdLaptop className="Website-Project" onClick={openSite} fontSize={iconFontSize} color="#fff" />
        </Hover>
      </div>
    </>
  );
};

export default ProjectList;