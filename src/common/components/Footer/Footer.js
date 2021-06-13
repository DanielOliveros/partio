import React from 'react';
import styled from '@emotion/styled';
import css from '@styled-system/css';

import { useTheme } from '@emotion/react';

const Text = ({
  fontSize = '16px', lineHeight = '22px', color = 'white', children, ...props
}) => (
  <div css={{
    fontSize,
    color,
    lineHeight,
    ...props,
  }}
  >
    {children}
  </div>
);

const MenuOption = ({ children }) => (
  <div css={{ marginRight: '44px' }}>
    <Text cursor="pointer">
      {children}
    </Text>
  </div>
);

const ContactPartio = ({ content }) => (
  <>
    <Text fontSize="44px" lineHeight="55px">
      {content.title}
    </Text>
    <div css={{ padding: '22px 0' }}>
      <Text>
        {content.text}
      </Text>
    </div>
    <Text>
      weare@partio.com
    </Text>
    <Text>
      669222668
    </Text>
  </>
);

const StyledInput = styled('input')(css({
  height: '42px',
  outline: 'none',
  width: '100%',
  border: 'none',
  fontSize: '14px',
  padding: '12px 18px',
  boxSizing: 'border-box',
  color: '#000131',
  '::placeholder': {
    color: '#000131',
    fontFamily: 'Lexend Deca, sans-serif',
    fontSize: '14px',
  },
}));

const StyledTextArea = styled('textarea')(css({
  outline: 'none',
  width: '100%',
  border: 'none',
  fontSize: '14px',
  height: '179px',
  padding: '12px 18px',
  color: '#000131',
  boxSizing: 'border-box',
  fontFamily: 'Lexend Deca, sans-serif',
  '::placeholder': {
    color: '#000131',
    fontFamily: 'Lexend Deca, sans-serif',
  },
}));

const StyledFormField = styled('div')(css({
  padding: '8px',
  width: '424px',
  boxSizing: 'border-box',
}));

const StyledButton = styled('button')(css({
  outline: 'none',
  color: '#000131',
  width: '100%',
  height: '57px',
  background: '#00DEED',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'Lexend Deca, sans-serif',
  fontSize: '18px',
}));

const Footer = ({ content }) => {
  const { partioColors } = useTheme();
  return (
    <div css={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '78px 134px 38px 104px',
      backgroundColor: partioColors.$darkGrey,
      boxSizing: 'border-box',
    }}
    >
      <div css={{
        maxWidth: '1130px',
        display: 'flex',
        flexGrow: '1',
      }}
      >
        <div css={{
          padding: '93px 0 184px 0',
          flexGrow: '1',
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
        }}
        >
          <ContactPartio content={content.contactPartio} />
        </div>
        <form css={{
          width: '50%',
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
        }}
        >
          <StyledFormField>
            <StyledInput placeholder={content.contactForm.name} />
          </StyledFormField>
          <StyledFormField>
            <StyledInput placeholder={content.contactForm.company} />
          </StyledFormField>
          <StyledFormField>
            <StyledInput placeholder={content.contactForm.email} type="email" />
          </StyledFormField>
          <StyledFormField>
            <StyledTextArea placeholder={content.contactForm.message} />
          </StyledFormField>
          <StyledFormField>
            <StyledButton>{content.contactForm.send}</StyledButton>
          </StyledFormField>
        </form>
      </div>
      <div css={{
        maxWidth: '1130px',
        display: 'flex',
        flexGrow: '1',
      }}
      >
        <MenuOption>Menu1</MenuOption>
        <MenuOption>Menu2</MenuOption>
        <MenuOption>Menu3</MenuOption>
        <Text marginLeft="auto">All rights reserved Partio.com</Text>
      </div>
    </div>
  );
};

export default Footer;
