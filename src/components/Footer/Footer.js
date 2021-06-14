import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: 111-111-111">111-111-111</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: connect2amanaswal@gmail.com">connect2amanaswal@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>It's always day 1</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="blank" href="https://github.com/AmanAswal">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="blank" href="https://www.linkedin.com/in/amanaswal/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="blank" href="https://www.instagram.com/amanaswal_/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper >
  );
};

export default Footer;
