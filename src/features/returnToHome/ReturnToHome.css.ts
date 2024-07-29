import { style } from '@vanilla-extract/css';

// ----------------------------------------------------------------------------------------------------
// ホーム画面に戻る
// ----------------------------------------------------------------------------------------------------

export const returnToHomeContainerStyle = style({
  position: 'absolute',
  bottom: '13%',
  right: '1%',
  display: 'flex',
  gap: '0.4rem',
  fontSize: '1.6rem',
  color: 'black',
  border: '0.4rem solid #203803',
  backgroundColor: '#f8f8d8',
  borderRadius: '1rem',
  padding: '0.8rem 0.3rem',
  zIndex: '1',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#e8e7cc',
  },
});

export const pokemonBallStyle = style({
  width: '1.6rem',
});
