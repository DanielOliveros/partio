import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuthContext from '@/hooks/useAuthContext';
import * as routes from '@/config/router/paths';

const PublicRoute = ({ Component, ...props }) => {
  const { token } = useAuthContext();

  return token
    ? <Redirect to={routes.PORTAL} />
    : <Route {...props} />;
};

export default PublicRoute;
