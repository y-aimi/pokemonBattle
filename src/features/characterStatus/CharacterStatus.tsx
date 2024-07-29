import { Const } from '@/common/AppConst';
import {
  characterNameContainerStyle,
  enemyCharacterStatusContainerStyle,
  friendCharacterStatusContainerStyle,
  progressContainerStyle,
  progressHpStyle,
  progressIndicatorStyle,
  progressRootStyle,
  translateX,
} from '@/features/characterStatus/CharacterStatus.css';
import { CharacterStatusProps } from '@/types/CharacterStatusProps';
import { QuestionLevel } from '@/types/QuestionLevel';
import * as Progress from '@radix-ui/react-progress';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useEffect, useState } from 'react';

/**
 * ポケモンステータス
 */
export const CharacterStatus = (props: CharacterStatusProps) => {
  const [progressRatio, setProgressRatio] = useState<number>();
  // プログレスバー割合
  useEffect(() => {
    if (Const.ENEMY_PROGRESS_COUNT_MAX_BY_LEVEL[QuestionLevel[props.questionLevelIndex]] === undefined) {
      return;
    }
    setProgressRatio(
      props.progressCount *
        (100 /
          (props.isEnemy
            ? Const.ENEMY_PROGRESS_COUNT_MAX_BY_LEVEL[QuestionLevel[props.questionLevelIndex]]
            : Const.FRIEND_PROGRESS_COUNT_MAX))
    );
  }, [props.progressCount, props.isEnemy, props.questionLevelIndex]);

  return (
    <div className={props.isEnemy ? enemyCharacterStatusContainerStyle : friendCharacterStatusContainerStyle}>
      <div className={characterNameContainerStyle}>
        <p>{props.name}</p>
        <p>Lv50</p>
      </div>
      <div className={progressContainerStyle}>
        <p className={progressHpStyle}>HP</p>
        <Progress.Root className={progressRootStyle}>
          <Progress.Indicator
            className={progressIndicatorStyle}
            style={assignInlineVars({
              [translateX]: `translateX(-${progressRatio}%)`,
            })}
          />
        </Progress.Root>
      </div>
    </div>
  );
};
