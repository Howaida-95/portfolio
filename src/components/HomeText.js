import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
const HomeText = () => {
  return (
    <>
      <span className = 'tags'>&nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
        <div className = 'typeWriter-container'>
          <p className = 'Typewriter'>I'm </p>
          <Typewriter
            options={{
            strings: ["Howaida", "frontend developer", "react native developer"],
            autoStart: true,
            loop: true,
          }}/> 
        </div>
      <span className = 'tags'>&nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span> 
      <div className = 'pd-2'>
        <Link to = '/contact' className = 'btn'>
          contact me
        </Link>  
      </div> 
    </>  
  );
}

export default HomeText;

