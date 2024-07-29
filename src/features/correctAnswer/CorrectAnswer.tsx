import {
  correctAnswerContainerStyle,
  correctAnswerExplanationStyle,
  correctAnswerKanaStyle,
  correctAnswerKanjiStyle,
  correctAnswerSubContainerStyle,
} from '@/features/correctAnswer/CorrectAnswer.css';
import { CorrectAnswerProps } from '@/types/CorrectAnswerProps';

/**
 * 問題
 */
export const CorrectAnswer = (props: CorrectAnswerProps) => {
  return (
    <>
      {!props.isDispQuestion && props.correctAnswer?.kanji && (
        <div className={correctAnswerContainerStyle}>
          <div className={correctAnswerSubContainerStyle}>
            <p className={correctAnswerKanjiStyle}>{props.correctAnswer.kanji}</p>
            <p className={correctAnswerKanaStyle}>{props.correctAnswer.kana}</p>
            <p className={correctAnswerExplanationStyle}>{props.correctAnswer.explanation}</p>
          </div>
        </div>
      )}
    </>
  );
};
