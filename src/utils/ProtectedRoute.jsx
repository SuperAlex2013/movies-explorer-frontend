import { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AppContext } from 'contexts/AppContext';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
