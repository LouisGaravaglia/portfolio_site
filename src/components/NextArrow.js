import React, {useEffect, useState} from 'react';
import {Spring} from 'react-spring/renderprops';

const NextArrow = () => {
  const [removingArrow, setRemovingArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemovingArrow(true)
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////


  return (
    <Spring
      from={{opacity: removingArrow ? 1 : 0}}
      to={{opacity: removingArrow ? 0 : 1}}
      config={{delay: 0, duration: 1500}}
    >
      {props => (
        <div style={props} className='Next-Arrow-Container'>
          <div className="Next-Arrow-Box">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default NextArrow;