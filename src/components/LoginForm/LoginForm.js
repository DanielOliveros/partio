import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';
import {
  Input,
  Wrapper,
  Button,
  FormFieldWrapper,
} from '@/components/form';

const StyledError = styled('span')(css({ color: 'red', fontSize: '12px' }));

const LoginForm = ({
  handleSubmit,
  handleChange,
  inputs,
  errors,
  content,
}) => (
  <Wrapper
    padding="20px 30px"
    position="absolute"
    top="30px"
    right="0"
    zIndex="1"
    boxShadow="0 15px 50px 0 rgb(101 103 106 / 30%)"
    width="300px"
  >
    <form onSubmit={handleSubmit}>
      <FormFieldWrapper>
        <Input
          placeholder={content.email}
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
        <StyledError>{errors.email}</StyledError>
      </FormFieldWrapper>
      <FormFieldWrapper>
        <Input
          placeholder={content.password}
          type="password"
          name="password"
          onChange={handleChange}
          value={inputs.password}
        />
        <StyledError>{errors.password}</StyledError>
      </FormFieldWrapper>
      <FormFieldWrapper>
        <Button type="submit">
          {content.submit}
        </Button>
      </FormFieldWrapper>
    </form>
  </Wrapper>
);

export default LoginForm;
