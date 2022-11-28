import React from 'react';
import Wrapper from '../components/shared/wrapper';
import BgZone from './../components/shared/BgZone';
import img from '../assets/images/logo.png';
import TextZone from './../components/shared/TextZone';
import HomeText from '../components/HomeText';
const Home = () => {
  return (
    <Wrapper>
      <TextZone>
        <HomeText/>
      </TextZone>
      <BgZone img = {img}/>
    </Wrapper>
  );
}

export default Home;