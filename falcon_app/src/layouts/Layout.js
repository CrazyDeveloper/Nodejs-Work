import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PagesLayout from './PagesLayout';
import ErrorLayout from './ErrorLayout';

import loadable from '@loadable/component';
const AuthBasicLayout = loadable(() => import('./AuthBasicLayout'));
const Landing = loadable(() => import('../components/landing/Landing'));
const Layout = () => {
  useEffect(() => {
    AuthBasicLayout.preload();
    Landing.preload();
    // WizardLayout.preload();
    // AuthCardRoutes.preload();
    // AuthSplitRoutes.preload();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/landing" component={Landing} />
        <Route path="/auth" component={AuthBasicLayout} />
        <Route path="/" component={PagesLayout} />
        <Route path="/errors" component={ErrorLayout} />
        
      </Switch>
      
    </Router>
  );
};

export default Layout;
