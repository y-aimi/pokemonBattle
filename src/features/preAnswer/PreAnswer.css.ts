import { style } from '@vanilla-extract/css';

// ----------------------------------------------------------------------------------------------------
// 直前の解答
// ----------------------------------------------------------------------------------------------------

export const preAnswerContainerStyle = style({
  textAlign: 'center',
  backgroundColor: '#81c8ea',
  color: 'black',
  width: '32rem',
  height: '7.45rem',
  margin: '0 auto',
  padding: '0.5rem',
  overflow: 'hidden',
  border: '0.5rem solid #acd2eb',
  borderRadius: '1rem',
});

export const preAnswerSubContainerStyle = style({
  backgroundColor: 'white',
  width: '28rem',
  height: '100%',
  margin: '0 auto',
  padding: '0.5rem',
  borderRadius: '1rem',
});
export const preAnswerTitleStyle = style({
  fontSize: '1.4rem',
  color: 'black',
});

export const preAnswerStyle = style({
  fontSize: '1.6rem',
  height: '2rem',
  color: 'black',
  fontWeight: 'bold',
  padding: '0.5rem 0',
});

export const preAnswerEmptyContainerStyle = style({
  width: '32rem',
  height: '7.45rem',
  margin: '0 auto',
  padding: '0.5rem',
});
