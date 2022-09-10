import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import UserContext from '../../Services/userService';

const RequireAuth = ({ children }) => {
  const userContext = useContext(UserContext)
  const location = useLocation()

  if (!userContext.isAuthenticated) {
    return (
      <Navigate to="/auth" state={{ from: location }} replace />
    )
  }

  return children;
}

export { RequireAuth }
