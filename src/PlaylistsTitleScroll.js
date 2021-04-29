import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import useViewport from './hooks/useViewport';
import useElementOnScreen from './hooks/useElementOnScreen';

function PlaylistsTitleScroll({playlist, index, parentFinishedMounting, selectedPlaylistIndex, handleScrollToSelectedTitle}) {
  // const [isVisible, setIsVisible] = useState<boolean>(false);
  const titleRef = useRef<any | null>(null);
  let leftSideOfTitleDiv = 0;
  let rightSideOfTitleDiv = 0;
  if (titleRef.current !== null) {
    const {left, right} = titleRef.current.getBoundingClientRect();
    leftSideOfTitleDiv = left;
    rightSideOfTitleDiv = right;
  }
  const {viewportWidth}  = useViewport();
  const viewportMidPoint = viewportWidth / 2;

  const entry = useElementOnScreen(titleRef, {
    root: document.querySelector('.scrolling-wrapper'),
    rootMargin: "0px -300px",
    threshold: 0.40
  });
  const isVisible = !!entry?.isIntersecting;

    useEffect(() => {
      const leftVal = titleRef.current.getBoundingClientRect().left;

      if(selectedPlaylistIndex === index) handleScrollToSelectedTitle(titleRef);
    }, [titleRef, selectedPlaylistIndex])


  return (
      <div className={isVisible ? 'Playlists-Featured-Title' : 'card'} ref={titleRef} ><h2 >{playlist.name}</h2></div>
  );
};

export default PlaylistsTitleScroll;