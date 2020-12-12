import React, {useState} from 'react';
import SearchResult from "./SearchResult";
import Hover from "./Hover";

// import PaginationSlider from "./PaginationSlider";

const SearchResultList = ({resultsArray, handleSearch}) => {
  const [resultsIdx, setResultsIdx] = useState(0);
   const [albumHover, setAlbumHover] = useState(false);
  const workInView = resultsArray[resultsIdx];

  
  const updateResultsInView = (val) => {
    setResultsIdx(val);
  };

    const handleAlbumClick = () => {

  };

  const handleForwardClick = () => {
      if (resultsIdx === resultsArray.length - 1) {
        return;
      } else {
        setResultsIdx(idx => idx + 1);
      }
  }

  const handleBackClick = () => {
    console.log("This is resultsIdx: ", resultsIdx);
      if (resultsIdx === 0) {
        return;
      } else {
        setResultsIdx(idx => idx - 1);
        console.log("This is resultsIdx after: ", resultsIdx);
      }
  }
  

  let displayAlbums = (
    <>

      <div className="Top-Placeholder">

      </div>

    <div className="Album" >

     <Hover scale={1.05}>
      <div onClick={handleBackClick} className="Back-Arrow"> 
      <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      </Hover> 

      <Hover scale={1.05}>
      <div onMouseEnter={() => setAlbumHover(true)} onMouseLeave={() => setAlbumHover(false)}>
        {albumHover && 
        <div className="Album-Name-Box" onClick={handleAlbumClick}>
        <video className="Work-Gif"  loop="true" autoplay="autoplay" muted>
          <source src={workInView.gif} type="video/mp4" />
        </video>
          <div className="Work-Summary">
          <div className="Work-Summary-Background"></div>
            <p className="Album-Name">{workInView.summary}</p>
          </div>
        </div>
        }
        <img className="Work-Image" src={workInView.image} alt="Girl in a jacket" />
      </div>
      </Hover>

<Hover scale={1.05}>
 <div onClick={handleForwardClick} className="Forward-Arrow"> 
      <ion-icon name="chevron-forward-outline"></ion-icon>
</div>
</Hover>

    </div>

     <div>
        <p className="Work-Text">0{resultsIdx + 1} / 02</p>
      </div>
   
      {/* <PaginationSlider  resultsArray={resultsArray} itemsPerPage={itemsPerPage} handleSliderChange={updateResultsInView} containerClass="Main-Pagination-Slider-Container" sliderClass="Main-Pagination-Slider"/> */}
    </>
  );


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
      {displayAlbums}

    </>
  );
};

export default SearchResultList;