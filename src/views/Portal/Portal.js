import React from 'react';
import AddCoworkingFormContainer from '@/containers/AddCoworkingFormContainer';
import AddUserFormContainer from '@/containers/AddUserFormContainer/AddUserFormContainer';
import Calendar from '@/components/Calendar';

const Portal = () => (
  <>
    <Calendar />
    <AddCoworkingFormContainer />
    <AddUserFormContainer />
  </>
);

export default Portal;
