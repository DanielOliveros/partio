import React from 'react';
import { useTheme } from '@emotion/react';

const Wrapper = ({ children, ...props }) => {
  const { partioColors } = useTheme();
  return (
    <div css={{
      backgroundColor: partioColors.$darkGrey,
      boxSizing: 'border-box',
      ...props,
    }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
