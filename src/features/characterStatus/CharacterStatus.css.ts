import { createVar, style } from '@vanilla-extract/css';
// ----------------------------------------------------------------------------------------------------
// ポケモンステータス
// ----------------------------------------------------------------------------------------------------

export const enemyCharacterStatusContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '50rem',
  height: '10rem',
  border: '0.4rem solid #203803',
  backgroundColor: '#f8f8d8',
  borderRadius: '1rem',
  padding: '0.5rem',
  margin: '1rem 0 0 1rem',
});

export const friendCharacterStatusContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '50rem',
  height: '10rem',
  border: '0.4rem solid #203803',
  backgroundColor: '#f8f8d8',
  borderRadius: '1rem',
  padding: '0.5rem',
  marginBottom: '5rem',
});

export const characterNameContainerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '1.5rem 2rem 0 1rem',
  fontSize: '2.2rem',
});

// ----------------------------------------------------------------------------------------------------
// プログレスバー
// ----------------------------------------------------------------------------------------------------

export const progressContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  width: '34rem',
  marginLeft: 'auto',
  backgroundColor: '#444',
  borderRadius: '1rem',
  padding: '0.3rem',
});

export const progressHpStyle = style({
  fontSize: '1.8rem',
  marginLeft: 'auto',
  padding: '0 0.2rem',
  textAlign: 'center',
  color: '#f8af78',
});

export const progressRootStyle = style({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#203803',
  borderRadius: '99999px',
  width: '30rem',
  height: '2.5rem',
  border: '0.2rem solid white',
});

export const translateX = createVar();
export const progressIndicatorStyle = style({
  backgroundColor: '#68eb9a',
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
  transform: translateX,
});
