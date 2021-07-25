import React from 'react';
import Typography from '@/components/Typography';
import { useMediaQuery } from 'react-responsive';

const AboutUs = ({ content }) => (
  <div css={{ paddingBottom: '121px', display: 'flex' }}>
    <div css={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
      <Typography type="title">{content.title}</Typography>
    </div>
    <div>
      <Typography type="text">{content.text}</Typography>
    </div>
  </div>
);

const AboutUsMobile = ({ content }) => (
  <div css={{
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '16px', paddingBottom: '69px',
  }}
  >
    <Typography type="title">{content.title}</Typography>
    <Typography type="text" paddingTop="31px">{content.text}</Typography>
  </div>
);

const Component = ({ content }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  return isDesktopOrLaptop
    ? <AboutUs content={content} /> : <AboutUsMobile content={content} />;
};

export default Component;
