import React from 'react';
import { useTheme } from '@emotion/react';

const Title = ({ children }) => {
  const { partioColors } = useTheme();
  return (
    <div css={{
      position: 'relative', fontSize: '44px', lineHeight: 0, width: 'fit-content',
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

const Subtitle = ({ children }) => {
  const { partioColors } = useTheme();

  return (
    <p css={{
      fontSize: '24px',
      lineHeight: '30px',
      color: partioColors.$darkGrey,
      margin: 0,
    }}
    >
      {children}
    </p>
  );
};

const Text = ({ children }) => {
  const { partioColors } = useTheme();
  return (
    <p css={{ color: partioColors.$textGrey, lineHeight: '22px', margin: 0 }}>
      {children}
    </p>
  );
};

const Typography = ({ type, children }) => {
  switch (type) {
    case 'title':
      return <Title>{children}</Title>;
    case 'subtitle':
      return <Subtitle>{children}</Subtitle>;
    default:
      return <Text>{children}</Text>;
  }
};

export default Typography;
