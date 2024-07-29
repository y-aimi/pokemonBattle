import { Const } from '@/common/AppConst';
import { CharacterStatus } from '@/features/characterStatus/CharacterStatus';
import {
  dummyEnemyContainerStyle,
  enemyContainerStyle,
  enemyImgBaseStyle,
  enemyImgContainerStyle,
  enemyImgEmptyStyle,
  enemyImgStyle,
} from '@/features/enemyPokemon/EnemyPokemon.css';
import { PokemonProps } from '@/types/PokemonProps';
import { QuestionLevel } from '@/types/QuestionLevel';
import { motion } from 'framer-motion';

/**
 * 敵ポケモン
 *
 * @param PokemonProps
 */
export const EnemyPokemon = (props: PokemonProps) => {
  return (
    <>
      {!props.isWinBattle ? (
        <div className={enemyContainerStyle}>
          <CharacterStatus
            {...{
              name: props.pokemon?.name,
              questionLevelIndex: props.questionLevelIndex,
              progressCount: props.progressCount,
              isEnemy: true,
            }}
          />
          {props.pokemon?.sprites.front_default !== undefined &&
          props.progressCount < Const.ENEMY_PROGRESS_COUNT_MAX_BY_LEVEL[QuestionLevel[props.questionLevelIndex]] ? (
            <motion.div
              className={enemyImgContainerStyle}
              animate={{ x: '0', opacity: 1 }}
              transition={{ duration: 1 }}
              initial={{ x: '40rem', opacity: 0 }}
            >
              <img className={enemyImgStyle} src={props.pokemon?.sprites.front_default} alt="enemyImg" />
              <div className={enemyImgBaseStyle} />
            </motion.div>
          ) : (
            <div className={enemyImgEmptyStyle} />
          )}
        </div>
      ) : (
        <div className={dummyEnemyContainerStyle} />
      )}
    </>
  );
};
