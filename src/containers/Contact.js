import React from 'react';
import Wrapper from '../components/shared/wrapper';
import TextZone from './../components/shared/TextZone';
import ContactText from './../components/ContactText/ContactText';
import BgZone from './../components/shared/BgZone';
import img from '../assets/images/contact.png'
const Contact = () => {
  return (
    <Wrapper>
      <TextZone>
        <ContactText />
      </TextZone>
      <BgZone img ={img}/>
    </Wrapper>
  );
}

export default Contact;