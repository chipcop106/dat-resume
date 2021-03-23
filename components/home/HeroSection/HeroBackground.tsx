import React, { FC, useCallback, useEffect, useState } from 'react';
import Particles from 'react-particles-js';

interface Hero {
  color: string;
}

const HeroBackground: FC<Hero> = ({ color }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const bgStyle = {
    position: 'absolute',
    width: windowWidth,
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: color,
  };

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  };

  const cleaner = useCallback(() => {
    window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return cleaner;
  }, [cleaner]);

  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 25,
          },
          shape: {
            type: 'triangle',
          },
          color: {
            value: ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c'],
          },
          line_linked: {
            color: '#ccc',
            width: 1,
            shadow: {
              enable: true,
              color: '#333333',
              blur: 5,
            },
          },
          size: {
            value: 10,
            random: true,
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            repulse: {
              distance: 200,
              duration: 0.5,
            },
            bubble: {
              distance: 200,
              size: 20,
              duration: 2,
              opacity: 0.5,
            },
          },
        },
        retina_detect: true,
      }}
      style={bgStyle}
    />
  );
};

export default HeroBackground;
