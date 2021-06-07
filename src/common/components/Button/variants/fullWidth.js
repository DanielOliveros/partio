import { variant } from 'styled-system';

const fullWidthVariant = variant({
  prop: 'fullWidth',
  variants: {
    true: {
      width: '100%',
    },
  },
});

export default fullWidthVariant;
