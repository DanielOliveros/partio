import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';
import Button from '@/common/components/Button';

const colorPrimary = '#00acfb';
const StyledFormWrapper = styled('div')(css({
  position: 'fixed',
  top: '80px',
  right: '15px',
  border: `solid 1px ${colorPrimary}`,
  padding: '20px 30px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 15px 50px 0 rgb(101 103 106 / 30%)',
}));

const StyledError = styled('span')(css({ color: 'red', fontSize: '12px' }));

const StyledInput = styled('input')(css({
  color: `${colorPrimary}`,
  backgroundColor: 'unset',
  border: `solid 1px ${colorPrimary}`,
  padding: '10px 20px',
  outline: 0,
}));

const StyledFormItem = styled('div')(css({
  padding: '10px 0',
}));

const LoginForm = ({
  handleSubmit,
  handleChange,
  inputs,
  errors,
  content,
}) => (
  <StyledFormWrapper>
    <form onSubmit={handleSubmit}>
      <StyledFormItem>
        <StyledInput
          placeholder={content.email}
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
        <StyledError>{errors.email}</StyledError>
      </StyledFormItem>
      <StyledFormItem>
        <StyledInput
          placeholder={content.password}
          type="password"
          name="password"
          onChange={handleChange}
          value={inputs.password}
        />
        <StyledError>{errors.password}</StyledError>
      </StyledFormItem>
      <StyledFormItem>
        <Button type="submit" fullWidth>
          {content.submit}
        </Button>
      </StyledFormItem>
    </form>
  </StyledFormWrapper>
);

export default LoginForm;
