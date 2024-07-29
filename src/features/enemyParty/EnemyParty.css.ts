import { style } from '@vanilla-extract/css';

// ----------------------------------------------------------------------------------------------------
// 敵パーティ
// ----------------------------------------------------------------------------------------------------

export const enemyPartyContainerStyle = style({
  position: 'absolute',
  top: '3rem',
  right: '3rem',
  display: 'flex',
  gap: '0.3rem',
  borderBottom: '0.4rem solid #203803',
  padding: '0.5rem 2rem',
});

export const pokemonBallStyle = style({
  width: '2rem',
});
export const lostPokemonBallStyle = style({
  width: '2rem',
  filter: 'grayscale(90%)',
});

export const dummyPokemonBallStyle = style({
  width: '2rem',
  height: '2rem',
  border: '0.2rem solid #203803',
  borderRadius: '50%',
});