import {
  announceStartTextStyle,
  answerContainerStyle,
  answerFormContainerStyle,
  answerFormStyle,
  answerFormSubContainerStyle,
} from '@/features/answer/Answer.css';
import { CorrectAnswer } from '@/features/correctAnswer/CorrectAnswer';
import { PreAnswer } from '@/features/preAnswer/PreAnswer';
import { AnswerProps } from '@/types/AnswerProps';

/**
 * 問題
 *
 * @param AnswerProps
 */
export const Answer = (props: AnswerProps) => {
  return (
    <div className={answerContainerStyle}>
      <PreAnswer {...{ answer: props.answer, isDispQuestion: props.isDispQuestion }} />
      <CorrectAnswer {...{ correctAnswer: props.correctAnswer, isDispQuestion: props.isDispQuestion }} />
      <div className={answerFormContainerStyle}>
        <div className={answerFormSubContainerStyle}>
          <input
            className={answerFormStyle}
            type="text"
            onKeyDown={props.handleInputKeyDown}
            value={props.inputValue}
            onChange={props.handleInputOnChange}
            onCompositionStart={props.handleInputOnCompositionStart}
            onCompositionEnd={props.handleInputOnCompositionEnd}
          />
          {!props.isEnableBattle && <p className={announceStartTextStyle}>↓↓カーソルを合わせてEnterでスタート↓↓</p>}
        </div>
      </div>
    </div>
  );
};
