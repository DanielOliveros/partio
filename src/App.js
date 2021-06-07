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
import PrivateRoute from '@/common/components/router/PrivateRoute';
import PublicRoute from '@/common/components/router/PublicRoute';
import AuthContextProvider from '@/contexts/authContext';
import Header from '@/common/components/Header';

const theme = {
  name: 'mainTheme',
  colors: {
    $colorPrimary: '#00acfb',
    $colorSecondary: '#30E4D7',
    $colorPrimaryDark: '#0035c6',
    $colorPrimaryLight: '#ff4dc7ff',
    $colorAccent: '#47ffc5',
    $colorAccentAlpha20: '#3347ffc5',
    $colorAccentDark: '#268164',
    $neon_pink: '#ff00ff',
    $colorPaypal: '#f6f7f8',
    $colorGoogle: '#b23121',
    $white: '#ffffff',
    $grey: '#767676',
    $grey_alpha: '#4d767676',
    $black: '#000000',
    $transparent: '#00000000',
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <AuthContextProvider>
            <>
              <Header />
              <div css={{
                paddingTop: '100px',
              }}
              >
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
