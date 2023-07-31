import React, { FC } from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute: FC<{condition: boolean, element: React.ReactNode, path: string}> = ({ condition, element, path }) => {
    
    if (!condition) {
      return <Navigate to="/" replace />;
    }
  
    return <Route path={path} element={element}/>;
  };

export {ProtectedRoute};