// ProtectedRoute.js

import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext.js';

export default function ProtectedRoute({ element: Component, ...props }) {

const { isLoggedIn } = useContext(AppContext);

  return (
    isLoggedIn ? <Component {...props} /> : <Navigate to='/' replace />
  )
};