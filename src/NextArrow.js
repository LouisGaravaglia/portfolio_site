import React, {useEffect, useState} from 'react';
import {Spring} from 'react-spring/renderprops';

const NextArrow = () => {
  const [removingArrow, setRemovingArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemovingArrow(true)
      console.log('This will run after 1 second!')
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////


  return (
    <Spring
      from={{opacity: removingArrow ? 1 : 0}}
      to={{opacity: removingArrow ? 0 : 1}}
      config={{delay: 0, duration: 1500}}
      // from={{opacity: 1}}
      // to={{opacity: 1}}
      // config={{delay: 0, duration: 0}}
    >
      {props => (
        <div style={props}>
          <div className="Forward-Arrow-Box" on>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      )}
    </Spring>
  );
};

export default NextArrow;