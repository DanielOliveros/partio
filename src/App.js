import React from 'react';
import LoginViewContainer from '@/containers/LoginViewContainer';
import PortalViewContainer from '@/containers/PortalViewContainer';
import Logout from 'views/Logout';
import { ThemeProvider } from '@emotion/react';
import {
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import * as routes from '@/config/router/paths';
import PrivateRoute from '@/components/router/PrivateRoute';
import PublicRoute from '@/components/router/PublicRoute';
import AuthContextProvider from '@/contexts/authContext';
import Header from '@/components/Header';
import theme from '@/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <AuthContextProvider>
            <>
              <Header />
              <div>
                <Switch>
                  <PublicRoute path={routes.LOGIN} component={LoginViewContainer} />
                  <PrivateRoute exact path={routes.LOGOUT} component={Logout} />
                  <PrivateRoute exact path={routes.PORTAL} component={PortalViewContainer} />
                </Switch>
              </div>
            </>
          </AuthContextProvider>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
