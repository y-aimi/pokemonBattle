import { QuestionObj } from '@/types/QuestionObj';

/**
 * 問題のprops型
 *
 * - question PokeAPI.Pokemon
 * - isDispQuestion プログレスバーのカウント
 */
export type QuestionProps = {
  question?: QuestionObj;
  isDispQuestion: boolean;
};
