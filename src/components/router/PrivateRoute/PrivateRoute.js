import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuthContext from '@/hooks/useAuthContext';
import * as routes from '@/config/router/paths';

const PrivateRoute = ({ Component, ...props }) => {
  const { token } = useAuthContext();
  return token
    ? <Route {...props} />
    : <Redirect to={routes.LOGIN} />;
};

export default PrivateRoute;
