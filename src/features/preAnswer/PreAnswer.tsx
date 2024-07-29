import {
  preAnswerContainerStyle,
  preAnswerEmptyContainerStyle,
  preAnswerStyle,
  preAnswerSubContainerStyle,
  preAnswerTitleStyle,
} from '@/features/preAnswer/PreAnswer.css';
import { PreAnswerProps } from '@/types/PreAnswerProps';

/**
 * 直前の解答
 */
export const PreAnswer = (props: PreAnswerProps) => {
  return (
    <>
      {props.answer !== undefined ? (
        <div className={preAnswerContainerStyle}>
          <div className={preAnswerSubContainerStyle}>
            {props.isDispQuestion ? (
              <>
                <p className={preAnswerTitleStyle}>【直前の解答】</p>
                <p className={preAnswerStyle}>{props.answer}</p>
              </>
            ) : (
              <>
                <p className={preAnswerTitleStyle}>【NEXT】</p>
                <p className={preAnswerStyle}>--Enterで次の問題へ--</p>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className={preAnswerEmptyContainerStyle}></div>
      )}
    </>
  );
};
