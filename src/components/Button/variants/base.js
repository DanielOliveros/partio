import css from '@styled-system/css';

export default css({
  alignItems: 'center',
  appearance: 'none',
  paddingX: '32px',
  paddingY: '12px',
  borderRadius: '22px',
  outline: 0,
  cursor: 'pointer',
  backgroundColor: 'white',
  border: 'solid 1px #00acfb',
  color: '#00acfb',
  '&:hover': {
    opacity: 0.5,
  },
});
