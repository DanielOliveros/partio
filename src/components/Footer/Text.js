import React from 'react';

const Text = ({
  fontSize = '16px', lineHeight = '22px', color = 'white', children, ...props
}) => (
  <div css={{
    fontSize,
    color,
    lineHeight,
    ...props,
  }}
  >
    {children}
  </div>
);

export default Text;
