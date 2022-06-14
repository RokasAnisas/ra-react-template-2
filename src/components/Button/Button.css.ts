import { style } from '@vanilla-extract/css';

export const button = style({
  display: 'flex',
  backgroundColor: '#59A96A',
  border: 0,
  padding: '10px',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#9BDEAC',
  },
});

export const label = style({
  color: '#fff',
  fontWeight: 700,
});
