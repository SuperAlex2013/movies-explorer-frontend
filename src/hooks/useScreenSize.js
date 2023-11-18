import { useState, useEffect, useRef } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { SMALL, MIDDLE, LARGE_PARAMS, MIDDLE_PARAMS, SMALL_PARAMS } from 'utils/constants';

const useScreenSize = () => {
  const { width } = useWindowSize();
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const paramRef = useRef({});

  useEffect(() => {
    setIsLargeDevice(width > SMALL + 1);

    if (width > MIDDLE) {
      paramRef.current = LARGE_PARAMS;
    } else if (width > SMALL) {
      paramRef.current = MIDDLE_PARAMS;
    } else {
      paramRef.current = SMALL_PARAMS;
    }
  }, [width]);

  return { isLargeDevice, paramRef };
};

export default useScreenSize;
