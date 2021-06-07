import React from 'react';
import css from '@styled-system/css';
import styled from '@emotion/styled';

const colorPrimary = '#00acfb';
const StyledInput = styled('input')(css({
  color: `${colorPrimary}`,
  backgroundColor: 'unset',
  border: `solid 1px ${colorPrimary}`,
  padding: '10px 20px',
  outline: 0,
}));
const Input = ({ ...props }) => <StyledInput {...props} />;

export default Input;
