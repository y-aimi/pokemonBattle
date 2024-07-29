import { style } from '@vanilla-extract/css';

export const blackedOutScreenStyle = style({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
});

// ----------------------------------------------------------------------------------------------------
// ブラックアウト
// ----------------------------------------------------------------------------------------------------

export const blackedOutContainerStyle = style({
  position: 'relative',
  margin: '10rem 0.5rem 0 0.5rem',
  padding: '0.1rem',
  backgroundColor: '#d04838',
  borderRadius: '1rem',
  color: 'white',
  textAlign: 'center',
  zIndex: '2',
});

export const blackedOutStyle = style({
  fontSize: '3rem',
  margin: '0.2rem 1rem',
  padding: '1rem',
  backgroundColor: '#68a0a0',
  borderRadius: '1rem',
  color: 'white',
  textAlign: 'center',
  zIndex: '1',
});
