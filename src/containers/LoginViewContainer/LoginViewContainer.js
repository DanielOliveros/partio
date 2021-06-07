import React from 'react';
import { useTranslation } from 'react-i18next';
import Login from '@/views/Login';
import 'firebase/auth';

const LoginViewContainer = () => {
  const { t } = useTranslation();

  const content = {
    valueProp: t('loginView.valueProp'),
    youWillKnowMoreShortly: t('loginView.youWillKnowMoreShortly'),
  };

  return <Login content={content} />;
};

export default LoginViewContainer;
