import { style } from '@vanilla-extract/css';

export const congratulationsScreenStyle = style({
  display: 'flex',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e0f8c8',
});

// ----------------------------------------------------------------------------------------------------
// Congratulations
// ----------------------------------------------------------------------------------------------------

export const congratulationsContainerStyle = style({
  position: 'relative',
  margin: '10rem 0.5rem 0 0.5rem',
  padding: '0.1rem',
  backgroundColor: '#d04838',
  borderRadius: '1rem',
  color: 'white',
  textAlign: 'center',
  zIndex: '2',
});

export const congratulationsStyle = style({
  fontSize: '3rem',
  margin: '0.2rem 1rem',
  padding: '1rem',
  backgroundColor: '#68a0a0',
  borderRadius: '1rem',
  color: 'white',
  textAlign: 'center',
  zIndex: '1',
});

// ----------------------------------------------------------------------------------------------------
// CongratulationsMessage
// ----------------------------------------------------------------------------------------------------

export const congratulationsMessageContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const congratulationsTextStyle = style({
  fontSize: '5rem',
  fontWeight: 'bold',
  margin: '0.2rem 1rem',
  padding: '1rem',
  color: '#68a0a0',
  textAlign: 'center',
  zIndex: '1',
});

export const congratulationsPokemonStyle = style({
  width: '20rem',
});
