import { style } from '@vanilla-extract/css';

export const mainStyle = style({
  display: 'flex',
  height: '73.3rem',
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
  display: 'flex',
  position: 'relative',
  flex: '1 1 100rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  backgroundColor: '#e0f8c8',
  border: '1rem ridge black',
});

// ----------------------------------------------------------------------------------------------------
// タイトル
// ----------------------------------------------------------------------------------------------------

export const titleQuestionContainerStyle = style({
  marginBottom: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});
export const titleContainerStyle = style({
  display: 'flex',
});

export const titleStyle = style({
  fontSize: '3rem',
  color: 'black',
  marginLeft: '1rem',
});

export const pokemonBallStyle = style({
  width: '3rem',
});

// ----------------------------------------------------------------------------------------------------
// 問題数
// ----------------------------------------------------------------------------------------------------

export const questionCountContainerStyle = style({
  display: 'flex',
  gap: '3rem',
  fontSize: '1.4rem',
});

export const questionCountStyle = style({
  fontSize: '2rem',
  fontWeight: 'bold',
});

// ----------------------------------------------------------------------------------------------------
// 地方リンク
// ----------------------------------------------------------------------------------------------------

export const RegionLinkContainerStyle = style({
  display: 'flex',
  gap: '1rem',
});

// ----------------------------------------------------------------------------------------------------
// ヒント
// ----------------------------------------------------------------------------------------------------

export const hintContainerStyle = style({
  display: 'flex',
  width: '30rem',
  alignItems: 'flex-end',
});

export const hintStyle = style({
  fontSize: '1.6rem',
  margin: '0 -1rem 5rem 1rem',
});
export const hintPokemonStyle = style({
  width: '10rem',
  height: '10rem',
  margin: '0 -2rem',
});

export const hintKeywordStyle = style({
  fontWeight: 'bold',
  color: '#ff6347',
});
