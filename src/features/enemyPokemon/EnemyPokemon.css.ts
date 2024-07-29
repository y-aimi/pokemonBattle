import { style } from '@vanilla-extract/css';

// ----------------------------------------------------------------------------------------------------
// 敵ポケモン
// ----------------------------------------------------------------------------------------------------

export const enemyContainerStyle = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: '15rem',
});

export const enemyImgContainerStyle = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: '30rem',
});

export const enemyImgStyle = style({
  width: '18rem',
  marginLeft: 'auto',
  marginRight: '10rem',
  zIndex: '1',
});
export const enemyImgBaseStyle = style({
  position: 'absolute',
  bottom: '-1rem',
  left: '-3rem',
  width: '25rem',
  height: '8rem',
  backgroundColor: '#98e098',
  border: '0.8rem solid #e0e090',
  borderRadius: '50%',
});

export const enemyImgEmptyStyle = style({
  width: '18rem',
  height: '30rem',
  marginLeft: 'auto',
  marginRight: '10rem',
  marginTop: '5rem',
  zIndex: '1',
});

export const dummyEnemyContainerStyle = style({
  height: '15rem',
});
