import React from 'react';
import Wrapper from '../components/shared/wrapper';
// import BgZone from './../components/shared/BgZone';
// import img from '../assets/images/skill.png';
import TextZone from './../components/shared/TextZone';
import SkillsText from '../components/SkillsText';
import SkillsBg from '../components/SkillsBg';
const Skills = () => {
  return (
    <Wrapper>
      <TextZone>
        <SkillsText/>
      </TextZone>
      <SkillsBg/>
    </Wrapper>
  );
}
export default Skills;