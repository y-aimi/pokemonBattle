import { style } from '@vanilla-extract/css';

// ----------------------------------------------------------------------------------------------------
// 味方ポケモン
// ----------------------------------------------------------------------------------------------------

export const friendContainerStyle = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const friendImgContainerStyle = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: '30rem',
});

export const friendImgStyle = style({
  width: '20rem',
  marginLeft: '5rem',
  zIndex: '1',
});

export const friendImgBaseStyle = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '25rem',
  height: '8rem',
  marginLeft: '3rem',
  marginBottom: '2.5rem',
  backgroundColor: '#98e098',
  border: '0.8rem solid #e0e090',
  borderRadius: '50%',
});

export const friendImgEmptyStyle = style({
  width: '18rem',
  height: '30rem',
  marginLeft: '5rem',
  zIndex: '1',
});
