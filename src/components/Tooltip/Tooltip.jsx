import { useContext } from 'react';
import { AppContext } from 'contexts/AppContext';
import './Tooltip.css'; // Ensure this path matches your project structure

function Tooltip({ children }) {
  const { isError } = useContext(AppContext);

  // Determine the class name based on the isError value
  const tooltipClassName = isError ? 'tooltip-container tooltip-visible' : 'tooltip';

  return (
    <div className={tooltipClassName}>
      {children}
    </div>
  );
}

export default Tooltip;
