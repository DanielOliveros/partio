import React from 'react';
import { withTranslation } from 'react-i18next';
import OneClickOffice from '@/common/components/Sections/OneClickOffice';
import OurPromise from '@/common/components/Sections/OurPromise/OurPromise';
import HowItWorks from '@/common/components/Sections/HowItWorks/HowItWorks';
import Coworkings from '@/common/components/Sections/Coworkings/Coworkings';
import AboutUs from '@/common/components/Sections/AboutUs/AboutUs';
import Footer from '@/common/components/Footer/Footer';

const Section = ({ children }) => (
  <div css={{
    width: '100%', display: 'flex', justifyContent: 'center',
  }}
  >
    <div css={{
      display: 'flex', paddingBottom: '180px', flexGrow: '1', maxWidth: '1130px',
    }}
    >
      {children}
    </div>
  </div>
);

const Login = ({ content }) => (
  <div>
    <Section>
      <OneClickOffice content={content.oneClickOffice} />
    </Section>
    <Section>
      <OurPromise content={content.ourPromise} />
    </Section>
    <Section>
      <HowItWorks content={content.howItWorks} />
    </Section>
    <Section>
      <Coworkings />
    </Section>
    <Section>
      <AboutUs content={content.aboutUs} />
    </Section>
    <Footer content={content.footer} />
  </div>
);

export default withTranslation()(Login);
