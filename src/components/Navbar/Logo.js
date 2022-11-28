import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
const Logo = () => {
  return (
    <div className = 'logo d-flex justify-content-center align-items-center'>
      <Link to = '/'>
        <img src = {logoImg} alt = 'logo'/>
      </Link>
    </div>
  );
}

export default Logo;