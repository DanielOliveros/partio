import styled from '@emotion/styled';
import css from '@styled-system/css';

const StyledInput = styled('input')(css({
  height: '42px',
  outline: 'none',
  width: '100%',
  border: 'none',
  fontSize: '14px',
  padding: '12px 18px',
  boxSizing: 'border-box',
  color: '#000131',
  '::placeholder': {
    color: '#000131',
    fontFamily: 'Lexend Deca, sans-serif',
    fontSize: '14px',
  },
}));

export default StyledInput;
