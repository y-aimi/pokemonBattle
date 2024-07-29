import { Const } from '@/common/AppConst';
import {
  dummyPokemonBallStyle,
  friendPartyContainerStyle,
  lostPokemonBallStyle,
  pokemonBallStyle,
} from '@/features/friendParty/FriendParty.css';

/**
 * 味方パーティ
 *
 * - progressCount プログレスバーカウント
 */
export const FriendParty = (props: { progressCount: number }) => {
  return (
    <div className={friendPartyContainerStyle}>
      <div className={dummyPokemonBallStyle} />
      <div className={dummyPokemonBallStyle} />
      <div className={dummyPokemonBallStyle} />
      <div className={dummyPokemonBallStyle} />
      <div className={dummyPokemonBallStyle} />
      <img
        className={props.progressCount < Const.FRIEND_PROGRESS_COUNT_MAX ? pokemonBallStyle : lostPokemonBallStyle}
        src={'/pokemon_ball.svg'}
        alt="ball"
      />
    </div>
  );
};
