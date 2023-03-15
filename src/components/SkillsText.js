import React from 'react';
import { Link } from 'react-router-dom';
const AboutText = () => {
  return (
    <>
      <span className = 'tags'>&nbsp;&nbsp;&nbsp;&lt;h1&gt;</span>
      <h1 className = 'heading animation'>Skills &#38; Experience</h1>
      <span className = 'tags'>&nbsp;&nbsp;&nbsp;&lt;/h1&gt;</span> 
      <ul className = 'about-list'>
        <li>HTML5</li>
        <li>CSS3, Bootstrap4 &#38; Sass</li>
        <li>JavaScript &#38; Typescript</li>
        <li>React JS, Redux, Redux toolkit &#38; ant design</li>
        <li>vue js, Nuxt js &#38; vuetify</li>
        <li>React native</li>
        <li>Git &#38; Github</li>
        <li>Photoshop</li>
        <li>Familiar with firebase</li>
        <li>Familiar with UX basics</li>
      </ul>
      <p className = 'pd-2'>Visit my <a href= 'https://www.linkedin.com/in/howaida-sayed-4311721b0/' target = '_blank' rel = 'noopener noreferrer' className = 'contact-links'>LinkedIn</a> profile for more details or just <Link to = '/contact' className = 'contact-links'>contact me</Link>
      </p>
    </>  
  );
}

export default AboutText;
