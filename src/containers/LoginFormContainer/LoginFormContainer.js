import React, { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import LoginForm from '@/common/components/LoginForm';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginFormContainer = ({ setVisible }) => {
  const history = useHistory();
  const { t } = useTranslation();
  const {
    handleSignin,
    inputs,
    setInputs,
    errors,
  } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignin();
    setInputs({ email: '', password: '' });
    setVisible(false);
    history.push('/');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const content = {
    email: t('loginView.loginForm.email'),
    password: t('loginView.loginForm.password'),
    submit: t('loginView.loginForm.submit'),
  };
  return (
    <LoginForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      inputs={inputs}
      errors={errors}
      content={content}
    />
  );
};

export default LoginFormContainer;
