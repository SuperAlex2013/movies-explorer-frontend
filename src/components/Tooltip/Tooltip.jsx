import React, { useContext, useEffect } from 'react';
import './Tooltip.css';

import { useLocation } from 'react-router-dom';
import { AppContext } from 'contexts/AppContext';
import { MESSAGES } from 'utils/constants';

function Tooltip() {
  const { pathname } = useLocation();
  const { state, status, setState } = useContext(AppContext);

  const renderTooltipText = () => {
    return (
      <>
        {pathname === '/movies' && (
          <span className="tooltip__error-status">{status}</span>
        )}
        {MESSAGES[pathname][status]}
      </>
    );
  };

  const getTooltipClassName = () => {
    return state !== 'idle' ? 'tooltip tooltip_visible' : 'tooltip';
  };

  useEffect(() => {
    if (state !== 'idle') setState('idle');

    // eslint-disable-next-line
  }, [pathname]);

  return (
    <div className={getTooltipClassName()}>
      <p className={`tooltip__text tooltip__${state}-text`} id="description">
        {renderTooltipText()}
      </p>
    </div>
  );
}

export default Tooltip;
