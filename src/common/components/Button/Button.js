import React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import base from './variants/base';
import typeVariant from './variants/type';
import fullWidthVariant from './variants/fullWidth';

const StyledButton = styled('button', { shouldForwardProp })(base, typeVariant, fullWidthVariant);

const Button = ({
  nativeType: type = '',
  type: variant = 'default',
  fullWidth,
  children,
  ...rest
}) => (
  <StyledButton type={type} variant={variant} fullWidth={fullWidth} {...rest}>
    {children}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  nativeType: PropTypes.string,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
};
