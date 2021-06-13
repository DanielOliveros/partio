import React from 'react';
import Typography from '@/common/components/Typography';
import styled from '@emotion/styled';
import css from '@styled-system/css';

const StyledDiv = styled('div')(css({
  padding: '23px 0',
}));

const HowItWorks = ({ content }) => (
  <>
    <div css={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
      <img src="src/assets/img/Group.png" alt="app" />
    </div>
    <div css={{ width: '50%', padding: '50px 0', display: 'flex' }}>
      <div css={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
        <Typography type="title">{content.title}</Typography>
        <StyledDiv>
          <Typography type="subtitle">{content.subtitle1}</Typography>
          <Typography type="text">{content.text1}</Typography>
        </StyledDiv>
        <StyledDiv>
          <Typography type="subtitle">{content.subtitle2}</Typography>
          <Typography type="text">{content.text2}</Typography>
        </StyledDiv>
        <StyledDiv>
          <Typography type="subtitle">{content.subtitle3}</Typography>
          <Typography type="text">{content.text3}</Typography>
        </StyledDiv>
      </div>
    </div>
  </>
);

export default HowItWorks;
