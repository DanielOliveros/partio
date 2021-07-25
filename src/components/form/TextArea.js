import styled from '@emotion/styled';
import css from '@styled-system/css';

const StyledTextArea = styled('textarea')(css({
  outline: 'none',
  width: '100%',
  border: 'none',
  fontSize: '14px',
  height: '179px',
  padding: '12px 18px',
  color: '#000131',
  boxSizing: 'border-box',
  fontFamily: 'Lexend Deca, sans-serif',
  '::placeholder': {
    color: '#000131',
    fontFamily: 'Lexend Deca, sans-serif',
  },
}));

export default StyledTextArea;
