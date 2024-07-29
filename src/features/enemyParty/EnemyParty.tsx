import {
  dummyPokemonBallStyle,
  enemyPartyContainerStyle,
  lostPokemonBallStyle,
  pokemonBallStyle,
} from '@/features/enemyParty/EnemyParty.css';

/**
 * 敵パーティ
 *
 * - remainingEnemyPokemon 残り敵ポケモン数
 */
export const EnemyParty = (props: { remainingEnemyPokemon: number }) => {
  return (
    <div className={enemyPartyContainerStyle}>
      <img
        className={props.remainingEnemyPokemon >= 3 ? pokemonBallStyle : lostPokemonBallStyle}
        src={'/pokemon_ball.svg'}
        alt="ball"
      />
      <img
        className={props.remainingEnemyPokemon >= 2 ? pokemonBallStyle : lostPokemonBallStyle}
        src={'/pokemon_ball.svg'}
        alt="ball"
      />
      <img
        className={props.remainingEnemyPokemon >= 1 ? pokemonBallStyle : lostPokemonBallStyle}
        src={'/pokemon_ball.svg'}
        alt="ball"
      />
      <div className={dummyPokemonBallStyle} />
      <div className={dummyPokemonBallStyle} />
      <div className={dummyPokemonBallStyle} />
    </div>
  );
};
