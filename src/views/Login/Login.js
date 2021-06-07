import React from 'react';
import { css } from '@styled-system/css';
import styled from '@emotion/styled';
import { withTranslation } from 'react-i18next';

const StyledImageContainer = styled('div')(css({
  height: '644px',
  backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/10/16/10/30/office-space-1744803_960_720.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  margin: '0 auto',
}));

const Login = ({ content }) => (
  <div css={{ padding: '40px 80px' }}>
    <div css={{
      fontSize: '60px',
      fontWeight: '200',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      paddingBottom: '40px',
    }}
    >
      {content.valueProp}
    </div>
    <StyledImageContainer />
    <div css={{
      fontSize: '30px',
      fontWeight: '200',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 0',
    }}
    >
      {content.youWillKnowMoreShortly}
    </div>
  </div>
);

export default withTranslation()(Login);
