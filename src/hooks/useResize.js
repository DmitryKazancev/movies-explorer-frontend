import { useState, useEffect } from 'react';
import { screen } from '../utils/constants.js';

export default function useResize() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(evt) {
      setWidth(evt.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSM: width >= screen.small,
    isScreenMD: width >= screen.middle,
    isScreenLG: width >= screen.large,
    isScreenXL: width >= screen.full,
  }
}