import { variant } from 'styled-system';

const typeVariant = variant({
  prop: 'variant',
  variants: {
    gradient: {
      color: 'white',
      backgroundImage: 'linear-gradient(180deg, #47FFC5 0%, #00ACFB 100%)',
      border: 'none',
    },
  },
});

export default typeVariant;
