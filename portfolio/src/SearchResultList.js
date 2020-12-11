import React, {useState} from 'react';
import SearchResult from "./SearchResult";
import Hover from "./Hover";

// import PaginationSlider from "./PaginationSlider";

const SearchResultList = ({resultsArray, handleSearch}) => {
  const [sliderVal, setSliderVal] = useState(0);
   const [albumHover, setAlbumHover] = useState(false);
  const workInView = resultsArray[sliderVal];
  console.log(workInView);
  
  const updateResultsInView = (val) => {
    setSliderVal(val);
  };

    const handleAlbumClick = () => {

  };


  let displayAlbums = (
    <>
      <div className="Browse-Albums">
      

    <div className="Album" >
      
      <div className="Back-Arrow"> 
      <ion-icon name="chevron-back-outline"></ion-icon>
      </div>

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

 <div className="Forward-Arrow"> 
      <ion-icon name="chevron-forward-outline"></ion-icon>
</div>

    </div>


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