import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MyTransaction from '../components/pages/personal/MyTransaction';
import Partners from '../components/pages/partner/Partners';
import PartnerProfile from '../components/pages/partner/PartnerProfile';
import Phase2 from '../components/pages/Phase2';
import MyProfile from '../components/pages/personal/MyProfile';

const myDashboardRoutes = (props) => {
  const { computedMatch: match } = props;
  console.log(match)
  return (
    <Switch>
      <Route path = "/home/mytransactions" exact  component={MyTransaction} />
      <Route path = "/main/partners" exact component={Partners} />
      <Route path = "/main/partnerProfile" exact component={PartnerProfile} />
      <Route path = "/main/phase2" exact component={Phase2} />
      <Route path = "/personal/profile" exact component={MyProfile} />
    </Switch>
  )
  };

export default myDashboardRoutes;