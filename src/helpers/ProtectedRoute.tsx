import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserOwner } from './userOwner';

const ProtectedRoute: FC<{condition: boolean, children: React.ReactElement}> = ({ condition, children }) => {
  
  const userOwner = useUserOwner();

  console.log(userOwner);
    if (!condition || !userOwner) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

export {ProtectedRoute};