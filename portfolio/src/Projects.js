import React, {useState} from 'react';
import Hover from "./Hover";
import Project from  "./Project";

const Projects = ({portfolioItems}) => {
  const [resultsIdx, setResultsIdx] = useState(0);
  const projectInView = portfolioItems[resultsIdx];

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

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
      <div className="Top-Placeholder">
      </div>

      <div className="Project-Container" >

      <Hover scale={1.05}>
        <div onClick={handleBackClick} className="Back-Arrow">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
      </Hover>

      {<Project key={projectInView.id} project={projectInView}/>}

      <Hover scale={1.05}>
        <div onClick={handleForwardClick} className="Forward-Arrow">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </Hover>

      </div>

      <div>
        <p className="Project-Page-Number">0{resultsIdx + 1} / 02</p>
      </div>
    </>
  );
};

export default Projects;