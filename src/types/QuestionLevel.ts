/**
 * 問題難易度の型
 */
export const QuestionLevel = ['level1', 'level2', 'level3'] as const;

export type QuestionLevel = (typeof QuestionLevel)[number];
