import React from 'react';
import {
  Input, Wrapper, Button, FormFieldWrapper, Label,
} from '@/components/form';
import Typography from '@/components/Typography/Typography';

const AddUserForm = ({
  handleSubmit, handleInputChange, inputsState, content,
}) => (
  <div css={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '40px 0',
  }}
  >
    <Typography type="title">Add users:</Typography>
    <Wrapper padding="20px 30px" maxWidth="700px">
      <form onSubmit={handleSubmit}>
        <div css={{
          display: 'flex',
          flexFlow: 'column',
        }}
        >
          <FormFieldWrapper>
            <Label>{content.userName}</Label>
            <Input type="text" name="userName" onChange={handleInputChange} value={inputsState.userName} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.userLastName}</Label>
            <Input type="text" name="userLastName" onChange={handleInputChange} value={inputsState.userLastName} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.phoneNumber}</Label>
            <Input type="tel" name="phoneNumber" onChange={handleInputChange} value={inputsState.phoneNumber} />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.email}</Label>
            <Input type="email" name="email" onChange={handleInputChange} value={inputsState.email} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Label>{content.password}</Label>
            <Input type="password" name="password" onChange={handleInputChange} value={inputsState.password} required />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Button type="submit">{content.submit}</Button>
          </FormFieldWrapper>
        </div>
      </form>
    </Wrapper>
  </div>
);

export default AddUserForm;
