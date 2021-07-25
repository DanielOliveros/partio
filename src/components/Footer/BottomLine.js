import React from 'react';
import Text from './Text';

const MenuOption = ({ children }) => (
  <div css={{ marginRight: '44px' }}>
    <Text cursor="pointer">
      {children}
    </Text>
  </div>
);

const BottomLine = () => (
  <div css={{
    maxWidth: '1130px',
    display: 'flex',
    flexGrow: '1',
  }}
  >
    <MenuOption>Menu1</MenuOption>
    <MenuOption>Menu2</MenuOption>
    <MenuOption>Menu3</MenuOption>
    <Text marginLeft="auto">All rights reserved Partio.com</Text>
  </div>
);

export default BottomLine;
