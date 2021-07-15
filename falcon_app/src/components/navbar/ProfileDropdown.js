import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';
import team3 from '../../assets/img/team/3.jpg';
import Avatar from '../common/Avatar';
import AppContext from '../../context/Context';
const ProfileDropdown = () => {
  const { toggleModal } = useContext(AppContext);
  return (
    // <Dropdown
    //   nav
    //   inNavbar
    //   isOpen={dropdownOpen}
    //   toggle={toggle}
    //   onMouseOver={() => {
    //     let windowWidth = window.innerWidth;
    //     windowWidth > 992 && setDropdownOpen(true);
    //   }}
    //   onMouseLeave={() => {
    //     let windowWidth = window.innerWidth;
    //     windowWidth > 992 && setDropdownOpen(false);
    //   }}
    // >
    //   <DropdownToggle nav className="pr-0">
    //     <Avatar src={team3} />
    //   </DropdownToggle>
    //   <DropdownMenu right className="dropdown-menu-card">
    //     <div className="bg-white rounded-soft py-2">
    //       <DropdownItem className="font-weight-bold text-warning" href="#!">
    //         <Avatar src={team3} />
    //         <span>Go Pro</span>
    //       </DropdownItem>
    //       <DropdownItem divider />
    //       <DropdownItem tag={Link} to="/personal/profile">
    //         My Profile
    //       </DropdownItem>
    //       <DropdownItem divider />
    //       <DropdownItem tag={Link} to="/pages/settings">
    //         Language
    //       </DropdownItem>
    //       <DropdownItem tag={Link} to="/authentication/basic/logout">
    //         Logout
    //       </DropdownItem>
    //     </div>
    //   </DropdownMenu>
    // </Dropdown>
    <Fragment>
      
      <div
        
        className="settings-popover nav-link cursor-pointer"
        onClick={() => {
          toggleModal();
        }}
      ><Avatar src={team3} /></div>
    </Fragment>
  );
};

export default ProfileDropdown;
