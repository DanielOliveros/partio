import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '@/views/Login';
import 'firebase/auth';

const LoginViewContainer = () => {
  const { t } = useTranslation();

  const content = {
    valueProp: t('loginView.valueProp'),
    youWillKnowMoreShortly: t('loginView.youWillKnowMoreShortly'),
    oneClickOffice: {
      title: t('landingPage.oneClickOffice.title'),
      text: t('landingPage.oneClickOffice.text'),
    },
    ourPromise: {
      title: t('landingPage.ourPromise.title'),
      subtitle1: t('landingPage.ourPromise.subtitle1'),
      subtitle2: t('landingPage.ourPromise.subtitle2'),
      subtitle3: t('landingPage.ourPromise.subtitle3'),
      text1: t('landingPage.ourPromise.text1'),
      text2: t('landingPage.ourPromise.text2'),
      text3: t('landingPage.ourPromise.text3'),
    },
    howItWorks: {
      title: t('landingPage.howItWorks.title'),
      subtitle1: t('landingPage.howItWorks.subtitle1'),
      subtitle2: t('landingPage.howItWorks.subtitle2'),
      subtitle3: t('landingPage.howItWorks.subtitle3'),
      text1: t('landingPage.howItWorks.text1'),
      text2: t('landingPage.howItWorks.text2'),
      text3: t('landingPage.howItWorks.text3'),
    },
    aboutUs: {
      title: t('landingPage.aboutUs.title'),
      text: t('landingPage.aboutUs.text'),
    },
    footer: {
      contactPartio: {
        title: t('landingPage.footer.title'),
        text: t('landingPage.footer.text'),
      },
      contactForm: {
        name: t('landingPage.footer.contactForm.name'),
        company: t('landingPage.footer.contactForm.company'),
        email: t('landingPage.footer.contactForm.email'),
        message: t('landingPage.footer.contactForm.message'),
        send: t('landingPage.footer.contactForm.send'),
      },
    },
  };

  return <Login content={content} />;
};

export default LoginViewContainer;
