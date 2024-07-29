import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  display: 'flex',
});

// ----------------------------------------------------------------------------------------------------
// スクリーン
// ----------------------------------------------------------------------------------------------------

export const dummyScreenStyle = style({
  flex: '1 1 30rem',
  backgroundColor: 'white',
  zIndex: '10',
});

export const screenStyle = style({
  position: 'relative',
  flex: '1 1 100rem',
  padding: '0.5rem',
  backgroundColor: '#e0f8c8',
  border: '1rem ridge black',
});
