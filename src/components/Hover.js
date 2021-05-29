import React, {useEffect, useState} from "react";
import {animated, useSpring} from 'react-spring';

const Hover = ({scale, timing = 150, children}) => {
  const [isHovered, setIsHovered] = useState(false);

  //BOUNCE ANIMATION CONFIGURATIONS
  const style = useSpring({
    display: 'inline-block',
    transform: isHovered
      ? `scale(${scale})`
      : `scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  //SET THE TIMER TO STOP THE ANIMATION AFTER A SET AMOUNT OF TIME
  useEffect(() => {

    if (!isHovered) {
      return;
    };

    const timeoutId = window.setTimeout(() => {
      setIsHovered(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isHovered, timing]);

  //TRIGGER THE ANIMATION AND THE AUDIO ON MOUSE-ENTER
  const trigger = () => {
    setIsHovered(true);
  };

  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Hover;