import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import variant from '@styled-system/variant';

const getStyledInput = (colors) => styled('input')(css({
  // fontSize: '12px',
  color: colors.$colorPrimary,
  backgroundColor: 'unset',
  border: 'solid 1px red',
  padding: '13px 20px',
  width: '100%',
  outline: 0,
  '&:placeholder': {
    // color: 'neutrals.1',
  },
}),
variant({
  prop: 'disabled',
  variants: {
    true: {
      color: 'grey',
    },
  },
}));

const TextInput = ({ ...rest }) => {
  const { colors } = useTheme();
  const StyledInput = getStyledInput(colors);
  return <StyledInput {...rest} />;
};

export default TextInput;
