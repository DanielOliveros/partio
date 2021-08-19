import React, { useState, useContext } from 'react';
import AddUserForm from '@/components/AddUserForm/AddUserForm';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@/contexts/authContext';
import getContent from './content';

const initialFormState = {
  userName: '',
  userLastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  submit: '',
};

const useForm = () => {
  const [inputsState, setInputs] = useState({ ...initialFormState });
  const {
    handleSignUp,
  } = useContext(AuthContext);
  const handleSubmit = (event) => {
    if (event) {
      handleSignUp({ email: inputsState.email, password: inputsState.password });
      setInputs({ ...initialFormState });
      event.preventDefault();
    }
  };
  const handleInputChange = (event) => {
    setInputs(() => ({ ...inputsState, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputsState,
  };
};

const AddUserFormContainer = () => {
  const { t } = useTranslation();
  const content = getContent(t);
  const { handleSubmit, handleInputChange, inputsState } = useForm();
  return (
    <AddUserForm
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      inputsState={inputsState}
      content={content}
    />
  );
};

export default AddUserFormContainer;
