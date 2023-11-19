import { useState, useEffect, useRef } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { SMALL, MIDDLE, LARGE_PARAMS, MIDDLE_PARAMS, SMALL_PARAMS } from 'utils/constants';

const useScreenSize = () => {
  const { width } = useWindowSize();
  const [isLargeDevice, setIsLargeDevice] = useState(false);
  const [paramRef, setParamRef] = useState(MIDDLE_PARAMS);

  useEffect(() => {
    setIsLargeDevice(width > SMALL + 1);
    let newValue = null;

    if (width > MIDDLE) {
      newValue = LARGE_PARAMS;
    } else if (width > SMALL) {
      newValue = MIDDLE_PARAMS;
    } else {
      newValue = SMALL_PARAMS;
    }

    if (newValue.number !== paramRef.number || newValue.limit !== paramRef.limit) {
      setParamRef(newValue);
    }
  }, [width]);

  return { isLargeDevice, paramRef };
};

export default useScreenSize;
