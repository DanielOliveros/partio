import React from 'react';
import Typography from '@/components/Typography';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import { useMediaQuery } from 'react-responsive';

const StyledDiv = styled('div')(css({
  padding: '23px 0',
}));

const Image = () => <img src="https://firebasestorage.googleapis.com/v0/b/cowork-97ad9.appspot.com/o/src%2Fassets%2Fimg%2Fsmartphone.png?alt=media&token=620af32b-5b32-468e-bb9c-2c3b1d9ddce1" alt="app" />;

const Subsections = ({ content }) => (
  <>
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
  </>
);
const SubsectionsWithTitle = ({ content }) => (
  <div css={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
    <Typography type="title">{content.title}</Typography>
    <Subsections content={content} />
  </div>
);
const HowItWorks = ({ content }) => (
  <>
    <div css={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
      <Image />
    </div>
    <div css={{ width: '50%', padding: '50px 0', display: 'flex' }}>
      <SubsectionsWithTitle content={content} />
    </div>
  </>
);

const HowItWorksMobile = ({ content }) => (
  <div css={{ display: 'flex', flexDirection: 'Column', padding: '0 16px' }}>
    <div css={{ paddingBottom: '63px' }}>
      <Typography type="title">{content.title}</Typography>
    </div>
    <div css={{ display: 'flex', flexWrap: 'wrap' }}>
      <div css={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Image />
      </div>
      <div css={{
        width: '100%', padding: '50px 0', display: 'flex', flexDirection: 'column',
      }}
      >
        <Subsections content={content} />
      </div>
    </div>
  </div>
);

const Component = ({ content }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  return isDesktopOrLaptop
    ? <HowItWorks content={content} /> : <HowItWorksMobile content={content} />;
};

export default Component;
