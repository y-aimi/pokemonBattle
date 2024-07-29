import { QuestionObj } from '@/types/QuestionObj';

/**
 * 正解のprops型
 *
 * - correctAnswer 正解
 * - isDispQuestion 問題表示有無
 */
export type CorrectAnswerProps = {
  correctAnswer?: QuestionObj;
  isDispQuestion: boolean;
};
