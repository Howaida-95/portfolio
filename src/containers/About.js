import React from 'react';
import Wrapper from '../components/shared/wrapper';
import BgZone from './../components/shared/BgZone';
import img from '../assets/images/person.png';
import TextZone from './../components/shared/TextZone';
import AboutText from '../components/AboutText';
const About = () => {
  return (
    <Wrapper>
      <TextZone>
        <AboutText/>
      </TextZone>
      <BgZone img = {img}/>
    </Wrapper>
  );
}

export default About;
