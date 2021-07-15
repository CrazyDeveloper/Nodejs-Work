import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/pages/dashboard/Dashboard';
import NavbarTop from '../components/navbar/NavbarTop';
import NavbarVertical from '../components/navbar/NavbarVertical';
import Footer from '../components/footer/Footer';
import loadable from '@loadable/component';
import AppContext from '../context/Context';
// import ProductProvider from '../components/e-commerce/ProductProvider';
import SidePanelModal from '../components/side-panel/SidePanelModal';
import { getPageName } from '../helpers/utils';

// const DashboardRoutes = loadable(() => import('./DashboardRoutes'));
const PagesRoutes = loadable(() => import('./PagesRoutes'));

const PagesLayout = ({ location }) => {
  const { isFluid, isVertical, navbarStyle } = useContext(AppContext);

  const isKanban = getPageName('kanban');
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={isFluid || isKanban ? 'container-fluid' : 'container'}>
      {isVertical && <NavbarVertical isKanban={isKanban} navbarStyle={navbarStyle} />}
      {/* <ProductProvider> */}
        <div className="content">
          <NavbarTop />         
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <PagesRoutes />
          </Switch>
          {!isKanban && <Footer />}
        </div>
        <SidePanelModal path={location.pathname} />
      {/* </ProductProvider> */}
    </div>
  );
};

PagesLayout.propTypes = { location: PropTypes.object.isRequired };

export default PagesLayout;
