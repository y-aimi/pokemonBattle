/**
 * ポケモンステータスのprops型
 *
 * - name ポケモンの名前
 * - questionLevelIndex 問題難易度インデックス
 * - progressCount プログレスバーのカウント
 * - isEnemy 敵ポケモンかどうか
 */
export type CharacterStatusProps = {
  name?: string;
  questionLevelIndex: number;
  progressCount: number;
  isEnemy: boolean;
};
