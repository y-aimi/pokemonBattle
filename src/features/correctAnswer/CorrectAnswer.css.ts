import { style } from '@vanilla-extract/css';

// ----------------------------------------------------------------------------------------------------
// 正解
// ----------------------------------------------------------------------------------------------------

export const correctAnswerContainerStyle = style({
  position: 'absolute',
  top: '20%',
  left: '5%',
  textAlign: 'center',
  backgroundColor: '#81c8ea',
  color: 'black',
  width: '35rem',
  padding: '0.5rem',
  border: '0.5rem solid #acd2eb',
  borderRadius: '1rem',
  zIndex: '5',
});

export const correctAnswerSubContainerStyle = style({
  backgroundColor: 'white',
  width: '28rem',
  height: '100%',
  margin: '0 auto',
  padding: '0.5rem',
  borderRadius: '1rem',
});

export const correctAnswerKanjiStyle = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
});

export const correctAnswerKanaStyle = style({
  fontSize: '1.6rem',
  color: '#167b6b',
  fontWeight: 'bold',
  padding: '0.5rem 0',
});

export const correctAnswerExplanationStyle = style({
  fontSize: '1.4rem',
  padding: '0.5rem',
});
