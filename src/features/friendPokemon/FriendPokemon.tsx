import { Const } from '@/common/AppConst';
import { CharacterStatus } from '@/features/characterStatus/CharacterStatus';
import { FriendParty } from '@/features/friendParty/FriendParty';
import {
  friendContainerStyle,
  friendImgBaseStyle,
  friendImgContainerStyle,
  friendImgEmptyStyle,
  friendImgStyle,
} from '@/features/friendPokemon/FriendPokemon.css';
import { PokemonProps } from '@/types/PokemonProps';
import { motion } from 'framer-motion';

/**
 * 味方ポケモン
 *
 * @param PokemonProps
 */
export const FriendPokemon = (props: PokemonProps) => {
  return (
    <div className={friendContainerStyle}>
      <FriendParty progressCount={props.progressCount} />
      {props.pokemon?.sprites.back_default !== undefined && props.progressCount < Const.FRIEND_PROGRESS_COUNT_MAX ? (
        <motion.div
          className={friendImgContainerStyle}
          animate={{ x: '0', opacity: 1 }}
          transition={{ duration: 1 }}
          initial={{ x: '-40rem', opacity: 0 }}
        >
          <img className={friendImgStyle} src={props.pokemon?.sprites.back_default} alt="pokeImg" />
          <div className={friendImgBaseStyle} />
        </motion.div>
      ) : (
        <div className={friendImgEmptyStyle} />
      )}
      <CharacterStatus
        {...{
          name: props.pokemon?.name,
          questionLevelIndex: props.questionLevelIndex,
          progressCount: props.progressCount,
          isEnemy: false,
        }}
      />
    </div>
  );
};
