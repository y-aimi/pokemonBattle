import { style } from '@vanilla-extract/css';

// ----------------------------------------------------------------------------------------------------
// 地方
// ----------------------------------------------------------------------------------------------------

export const linkContainerStyle = style({
  fontSize: '3rem',
  textAlign: 'center',
  width: '30rem',
  border: '0.4rem solid #203803',
  backgroundColor: '#f8f8d8',
  borderRadius: '1rem',
  padding: '4rem',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#e8e7cc',
  },
});
