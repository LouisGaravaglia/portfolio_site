import React, {useState, useRef, useEffect} from 'react';
import Project from './Project';
import PlaylistsTitleScroll from './PlaylistsTitleScroll';
import useViewport from './hooks/useViewport';


function CarouselContainer({portfolioItems, projectHover, setProjectHover}) {
  // const [isVisible, setIsVisible] = useState(false);
  // const [parentFinishedMounting, setParentFinishedMounting] = useState(false);
  // const [selectedPlaylistRef, setSelectedPlaylistRef] = useState(null);
  // const {viewportWidth}  = useViewport();
  // const titleRef = useRef(null);
  const wrapperRef = useRef(null);

  // function observeTitlesInView(index) {
  //   console.log('index in view: ', index);
    
  // }

  // function handleInViewport(titleRef: any | null, index: number) {
  //   console.log("hit");
    
  //   if (titleRef.current === null) return;
  //   const {left, right} = titleRef.current.getBoundingClientRect();

  //   const viewportMidPoint = viewportWidth / 2;
  //   // const enteredFrame = !!entry?.isIntersecting && (left < viewportMidPoint && right > viewportMidPoint);
  //   const enteredFrame = (left < viewportMidPoint && right > viewportMidPoint);

  //   setIsVisible(enteredFrame)
  //   console.log(`enteredFrame ${index}`, enteredFrame);
    
  //   console.log(`LEFT ${index}`, left);

  //   console.log('midpoint', viewportMidPoint);
  //   console.log(`RIGHT ${index}`, right);
    
  //   // if (enteredFrame) observeTitlesInView(index);
  //   // return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  // }

  // useEffect(() => {

  //   const scrollPastCategories = () => {
  //     DanceabilitySearchRef.current.scrollIntoView({behavior: "smooth"});
  //   }
  //   scrollPastCategories();
  // }, [selectedTitle]);

  // useEffect(() => {
  //   function parentDidMount() {
  //     setParentFinishedMounting(true)
  //   }

  //   parentDidMount();
  // }, [])

  
  function handleScrollToSelectedTitle(titleRef) {
    console.log('handleScroll', titleRef);
    if (titleRef.current !== null) {
      console.log('offsetLeft', titleRef.current.offsetLeft);
      //TODO: MAKE MEDIA QUERY THAT LOWER'S THE AMOUNT SUBTRACTING FROM TITLEREF OFFSET VALUE
      wrapperRef.current.scroll({left: titleRef.current.offsetLeft - 300, behavior: 'smooth'});
    }
  }


  //   useEffect(() => {
  //     console.log("trying to scroll");
  //     // wrapperRef.current.scroll({left: 820, behavior: 'smooth'});
  //     // if (titleRef.current !== null) titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });

  // }, [selectedPlaylistRef])

  

  return (
    // <div className="scrollingContainer">

    <div className="scrolling-wrapper" ref={wrapperRef}>
      {/* <div className='card' ><h2 ></h2></div> */}
      {portfolioItems.map((project, index) => <Project key={project.id} index={index} project={project} projectHover={projectHover} setProjectHover={setProjectHover}/>)}

      {/* {portfolioItems.map((item, index) => <PlaylistsTitleScroll key={index} index={index} item={item} parentFinishedMounting={parentFinishedMounting} selectedPlaylistIndex={selectedPlaylistIndex} handleScrollToSelectedTitle={handleScrollToSelectedTitle}/>)} */}
      {/* <div className='card' ><h2 ></h2></div> */}

    </div>
    // </div>

  );
};

export default CarouselContainer;