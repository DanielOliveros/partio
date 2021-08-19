import React, { useState } from 'react';
import { db } from '@/firebase/firebaseIndex';
import AddCoworkingForm from '@/components/AddCoworkingForm/AddCoworkingForm';
import { useTranslation } from 'react-i18next';
import getContent from './content';

const initialFormState = {
  coworkingName: '',
  direction: '',
  openingHours: '',
  availableSeats: '',
  description: '',
  instructions: '',
  amenities: {
    freeCoffee: false,
    freeWifi: false,
    kitchen: false,
    games: false,
    terrace: false,
    printer: false,
  },
  phoneNumber: '',
};

const useForm = () => {
  const [inputsState, setInputs] = useState({ ...initialFormState });
  const handleSubmit = (event) => {
    if (event) {
      db.collection('coworks').add({
        ...inputsState,
      });
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

const AddCoworkingFormContainer = () => {
  const { t } = useTranslation();
  const content = getContent(t);
  const { handleSubmit, handleInputChange, inputsState } = useForm();
  return (
    <AddCoworkingForm
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      inputsState={inputsState}
      content={content}
    />
  );
};

export default AddCoworkingFormContainer;
