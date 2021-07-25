import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Wrapper from './Wrapper';
import ContactPartio from './ContactPartio';
import BottomLine from './BottomLine';
import ContactForm from './ContactForm';

const Footer = ({ content }) => (
  <Wrapper display="flex" justifyContent="center" flexDirection="column" padding="78px 134px 38px 104px">
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
        maxWidth: '50%',
      }}
      >
        <ContactPartio content={content.contactPartio} />
      </div>
      <ContactForm
        content={content.contactForm}
        width="50%"
        maxWidth="424px"
        marginLeft="auto"
      />
    </div>
    <BottomLine />
  </Wrapper>
);

const FooterMobile = ({ content }) => (
  <Wrapper padding="34px 16px 29px">
    <ContactPartio content={content.contactPartio} />
    <ContactForm content={content.contactForm} paddingTop="34px" />
  </Wrapper>
);

const Component = ({ content }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  return isDesktopOrLaptop
    ? <Footer content={content} /> : <FooterMobile content={content} />;
};

export default Component;
