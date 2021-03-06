export const version = '2.10.2';
export const navbarBreakPoint = 'xl'; // Vertical navbar breakpoint
export const topNavbarBreakpoint = 'lg';
export const settings = {
  isFluid: false,
  isRTL: false,
  isDark: false,
  isTopNav: false,
  isRKC: false,
  isVertical: true,
  get isCombo() {
    return this.isVertical && this.isTopNav;
  },
  showBurgerMenu: true, // controls showing vertical nav on mobile
  currency: '$',
  isNavbarVerticalCollapsed: false,
  navbarStyle: 'transparent'
};
export default { version, navbarBreakPoint, topNavbarBreakpoint, settings };
