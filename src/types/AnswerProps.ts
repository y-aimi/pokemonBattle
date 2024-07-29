import { QuestionObj } from '@/types/QuestionObj';
import { ChangeEvent, KeyboardEvent } from 'react';

/**
 * 解答のprops型
 *
 * - answer 解答
 * - correctAnswer 正解
 * - inputValue フォーム入力値
 * - isEnableBattle バトル開始しているかどうか
 * - isDispQuestion 問題表示有無
 * - handleInputKeyDown inputタグonKeyDownイベントの処理
 * - handleInputOnChange inputタグonChangeイベントの処理
 * - handleInputOnCompositionStart inputタグonCompositionStartイベントの処理
 * - handleInputOnCompositionEnd inputタグonCompositionEndイベントの処理
 */
export type AnswerProps = {
  answer?: string;
  correctAnswer?: QuestionObj;
  inputValue: string;
  isEnableBattle: boolean;
  isDispQuestion: boolean;
  handleInputKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleInputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleInputOnCompositionStart: () => void;
  handleInputOnCompositionEnd: () => void;
};
