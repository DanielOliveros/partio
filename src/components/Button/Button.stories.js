// Button.stories.js

import React from 'react';
import Button from './Button';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
};
export const Primary = ({ type }) => <Button onClick={() => console.log('click')} type={type}>Button</Button>;
Primary.args = {
  onClick: () => console.log('click control'),
  type: '',
};

Primary.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['default', 'gradient'],
    },
  },
};
