import { style } from '@vanilla-extract/css';

export const answerContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',
});

// ----------------------------------------------------------------------------------------------------
// 解答
// ----------------------------------------------------------------------------------------------------

export const answerFormContainerStyle = style({
  width: '100%',
  backgroundColor: '#484050',
});

export const answerFormSubContainerStyle = style({
  width: '99%',
  margin: '0.5rem',
  backgroundColor: '#d04838',
  borderRadius: '1rem',
  color: 'white',
  textAlign: 'center',
  zIndex: '1',
});

export const answerFormStyle = style({
  width: '98%',
  fontSize: '3rem',
  margin: '0.2rem 1rem',
  padding: '1rem',
  cursor: 'pointer',
  backgroundColor: '#68a0a0',
  borderRadius: '1rem',
  color: 'white',
  textAlign: 'center',
  zIndex: '1',
});

export const announceStartTextStyle = style({
  position: 'absolute',
  bottom: '13%',
  left: '1%',
  fontSize: '2rem',
  color: 'black',
  border: '0.4rem solid #203803',
  backgroundColor: '#f8f8d8',
  borderRadius: '1rem',
  padding: '0.5rem',
  zIndex: '1',
});
