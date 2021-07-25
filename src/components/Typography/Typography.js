import React from 'react';
import { useTheme } from '@emotion/react';

const Title = ({ children, ...props }) => {
  const { partioColors } = useTheme();
  return (
    <div css={{
      position: 'relative', fontSize: '44px', lineHeight: 0, width: 'fit-content', ...props,
    }}
    >
      <div css={{ zIndex: 2, color: partioColors.$darkGrey }}>
        {children}
      </div>
      <div css={{
        zIndex: 1,
        height: '25px',
        width: '100%',
        background: 'linear-gradient(269.7deg, #54F2CC 0.05%, rgba(255, 255, 255, 0) 99.38%), #13E1EE',
      }}
      />
    </div>
  );
};

const Subtitle = ({ children, ...props }) => {
  const { partioColors } = useTheme();

  return (
    <p css={{
      fontSize: '24px',
      lineHeight: '30px',
      color: partioColors.$darkGrey,
      margin: 0,
      ...props,
    }}
    >
      {children}
    </p>
  );
};

const Text = ({ children, ...props }) => {
  const { partioColors } = useTheme();
  return (
    <p css={{
      color: partioColors.$textGrey, lineHeight: '22px', margin: 0, ...props,
    }}
    >
      {children}
    </p>
  );
};

const Typography = ({ type, children, ...props }) => {
  switch (type) {
    case 'title':
      return <Title {...props}>{children}</Title>;
    case 'subtitle':
      return <Subtitle {...props}>{children}</Subtitle>;
    default:
      return <Text {...props}>{children}</Text>;
  }
};

export default Typography;
