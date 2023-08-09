import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: FC<{condition: boolean, children: React.ReactElement}> = ({ condition, children }) => {
    
    if (!condition) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

export {ProtectedRoute};