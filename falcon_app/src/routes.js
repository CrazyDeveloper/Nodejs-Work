import { version } from './config';

export const homeRoutes = {
  name: 'Home',
  to: '/',
  exact: true,
  icon: 'chart-pie',
  children: [
    {
      to: '/',
      name: 'Dashboard',
      icon: 'archive',
      exact: true
    },
    { to: '/home/mytransactions', name: 'My Transactions', icon: 'star', },
    
  ]
};


export const mainRoutes = {
  name: 'Main',
  to: '/main',
  icon: 'copy',
  children: [
    { to: '/main/partners', name: 'Partners', icon: 'users' },
    { to: '/main/partnerProfile', name: 'Partner Profile', icon: 'book' },
    { to: '/main/phase2', name: 'phase2', icon: 'edit'},
  ]
};
export const reportsRoutes = {
  name: 'Reports',
  to: '/reports',
  exact: true,
  icon: 'poll',
  children: [
    { to: '/reports/phase21', name: 'Phase2', icon: 'edit' },
    { to: '/reports/phase22', name: 'Phase2', icon: 'edit' },
    { to: '/reports/phase23', name: 'phase2', icon: 'edit'},
    { to: '/reports/phase24', name: 'phase2', icon: 'edit' }
  ]
};


export default [
  homeRoutes,
  mainRoutes,
  reportsRoutes
];
