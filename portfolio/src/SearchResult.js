import React, {memo, useState} from 'react';
import Hover from "./Hover";


const SearchResult = memo(({id, summary, image}) => {
  const [albumHover, setAlbumHover] = useState(false);


  const handleAlbumClick = () => {

  };

 

////////////////////////////////////////////////////  ALBUMS  ////////////////////////////////////////////////////



  let displayAlbums = (

    <div className="Album" onMouseEnter={() => setAlbumHover(true)} onMouseLeave={() => setAlbumHover(false)}>
      <Hover scale={1.05}>
        {albumHover && 
        <div className="Album-Name-Box" onClick={handleAlbumClick}>
        <p className="Album-Name Artist-Albums">{summary}</p>
        </div>
        }
        <img src={image} alt=""/>
      </Hover>
    </div>
  );


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <>
      {displayAlbums}
    </>
  );
});

export default SearchResult;