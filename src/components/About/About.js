import React from 'react'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
const About = () => {
    return (
        <Section id="about">
            <SectionDivider />
            <br />
            <SectionTitle>About Me</SectionTitle>
            <SectionText>
                Write about me <br />
                add education 
            </SectionText>
        </Section>
    )
}

export default About;
