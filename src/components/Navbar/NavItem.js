import React from 'react';
import { NavLink } from 'react-router-dom';
const NavItem = ({clicked, item}) => {
  const {exact, link, iconContent, txtContent} = item;
  return (
    <li onClick = {clicked} className = 'nav-item'>
      <NavLink 
        exact = {exact}
        to = {link}>
          <div>
            <span className = 'icon-content'>{iconContent}</span>
            <span className = 'txt-content'>{txtContent}</span>
          </div>
      </NavLink>
    </li>
  );
}
export default NavItem;