import React, {useState} from 'react';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaStackOverflow
} from 'react-icons/fa';

const MediaIcons = () => {
  const style = {
    fontSize: '14px'
  }
  const [mediaIcons] = useState([
    {
      href: 'https://www.facebook.com/howyda.sayed.9?epa=SEARCH_BOX',
      icon: <FaFacebookF style = {style}/>
    },
    {
      href: 'https://www.linkedin.com/in/howaida-sayed-4311721b0/',
      icon: <FaLinkedinIn style = {style}/>
    },
    // {
    //   href: 'https://github.com/Howaida-95',
    //   icon: <FaGithub style = {style}/>
    // },
    {
      href: 'https://stackoverflow.com/users/10467090/howaida?tab=profile',
      icon: <FaStackOverflow style = {style}/>
    }
  ]);
  return (
    <>
    {
      mediaIcons.map((item, index) => {
        return <li key = {index}>
          <a href = {item.href} className = 'icon' target = '_blank' rel = 'noopener noreferrer'>
            {item.icon}
          </a>
        </li>
      })
    }
    </>
  );
}

export default MediaIcons;