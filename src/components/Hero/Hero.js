import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        I am Aman Aswal
      </SectionTitle>
      <SectionText>
        write a good intro
      </SectionText>
      <Button onClick={() => window.location = "https://drive.google.com/file/d/19fAfxaWDw_pgQ2d_ZnRvIbzD_qCSONDq/view?usp=sharing"}>Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;