import React , {useState} from 'react';
import {  
  FaHome,
  FaUser,
  FaCog,
  FaEye,
  FaEnvelope,
} from 'react-icons/fa';
import Logo from './Logo';
import ToggleBtn from './ToggleBtn';
import NavItem from './NavItem';
import MediaIcons from './MediaIcons';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navItems] = useState([
    {
      exact: true,
      link: '/',
      iconContent: <FaHome className = 'nav-icon'/>,
      txtContent : 'home'
    },
    {
      exact: false,
      link: '/about',
      iconContent: <FaUser className = 'nav-icon'/>,
      txtContent: 'about'
    },
    {
      exact: false,
      link: '/skills',
      iconContent: <FaCog className = 'nav-icon'/>,
      txtContent: 'skills'
    },
    {
      exact: false,
      link: '/works',
      iconContent: <FaEye className = 'nav-icon'/>,
      txtContent: 'my works'
    },
    {
      exact: false,
      link: '/contact',
      iconContent: <FaEnvelope className = 'nav-icon'/>,
      txtContent: 'contact'     
    },        
  ]);

  return (
    <nav className = 'navbar'>
      <div className = 'nav-center'>
        <div className = 'nav-header'>
          <Logo />
          <ToggleBtn clicked = {() => setShow(!show)}/>
        </div>
        {/* nav items */}
        <ul className = {show? 'nav-links show-nav' : 'nav-links'}>
          {navItems.map((item, index) => {
            return <NavItem 
              clicked = {() => setShow(false)} 
              item = {item}
              key ={index}/>
          })}
        </ul>
        {/* social media icons */}
        <ul className = {show? 'd-none' : 'nav-links'}>
          <MediaIcons/>
        </ul>        
      </div>
    </nav>
  );
}
export default Navbar;